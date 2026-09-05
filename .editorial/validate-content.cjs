const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = vm.createContext({});
vm.runInContext(read('news-data.js') + '\n' + read('article-content.js') + '\nglobalThis.data = { articles, articleContent, getPublishedArticles, getRelatedArticles, getFeaturedArticles };', context);
const { articles, articleContent, getPublishedArticles, getRelatedArticles, getFeaturedArticles } = context.data;
const published = getPublishedArticles();
const ids = new Set(articles.map(article => article.id));
assert.equal(ids.size, articles.length, 'Duplicate article IDs');
assert.equal(new Set(published.map(article => article.title)).size, published.length, 'Duplicate titles');
assert.equal(new Set(published.map(article => article.description)).size, published.length, 'Duplicate descriptions');
const sitemapIds = [...read('sitemap.xml').matchAll(/\/articles\/(\d+)<\/loc>/g)].map(match => Number(match[1]));
assert.deepEqual(sitemapIds.sort((a,b) => a-b), Array.from(published, article => article.id).sort((a,b) => a-b));
const forbidden = /Lorem ipsum|\bTODO\b|\bTBD\b|\[insert statistic\]/i;
function checkLocalLink(href, origin) {
    if (!href || /^(?:https?:|mailto:|tel:|#)/.test(href)) return;
    const url = new URL(href, 'https://www.tv96live.org/' + origin);
    const articleMatch = url.pathname.match(/^\/articles\/(\d+)$/);
    if (articleMatch) {
        assert(published.some(article => article.id === Number(articleMatch[1])), `Broken/draft link ${href} in ${origin}`);
        return;
    }
    const pathname = decodeURIComponent(url.pathname);
    const file = pathname === '/' ? 'index.html' : pathname.slice(1);
    assert(fs.existsSync(path.join(root, file)) || fs.existsSync(path.join(root, file + '.html')), `Missing local link ${href} in ${origin}`);
}
for (const article of published) {
    const body = articleContent[article.id];
    assert(body?.trim(), `Empty body ${article.id}`);
    assert(!/<h1\b/i.test(body), `Body adds an H1: ${article.id}`);
    assert(/<h2\b/.test(body), `Missing headings ${article.id}`);
    assert(!forbidden.test(body), `Placeholder ${article.id}`);
    assert(article.author && article.category && article.description && article.publishedAt && article.wordCount, `Incomplete metadata ${article.id}`);
    assert(Number.isFinite(Date.parse(article.publishedAt)), `Invalid publication date ${article.id}`);
    const related = getRelatedArticles(article);
    assert.equal(related.length, 3, `Missing related items ${article.id}`);
    for (const item of related) assert(item.isPublished === true && item.id !== article.id);
    for (const match of body.matchAll(/href="([^"]+)"/g)) checkLocalLink(match[1], `articles/${article.id}`);
    if (article.id >= 12) {
        assert(article.sources?.length, `Missing source ${article.id}`);
        assert(/href="\/(?!\/)/.test(body), `No contextual links ${article.id}`);
        assert(!/streams\.js|<iframe\b|<img\b|href="[^"]*watch-live/i.test(body), `Unexpected media in guide ${article.id}`);
    }
}
for (const article of articles.filter(article => article.isPublished !== true)) {
    assert(!sitemapIds.includes(article.id));
    assert(!getFeaturedArticles().some(item => item.id === article.id));
}
const htmlFiles = fs.readdirSync(root).filter(file => file.endsWith('.html'));
for (const file of htmlFiles) {
    const html = read(file);
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (/src=|application\/ld\+json/.test(match[1]) || !match[2].trim()) continue;
        new vm.Script(match[2], { filename: file });
    }
    const adScripts = (html.match(/<script\b[^>]*src="https:\/\/pagead2\.googlesyndication\.com/gi) || []).length;
    assert(adScripts <= 1, `Duplicate AdSense loader: ${file}`);
    if (['index.html', 'news.html', 'about.html'].includes(file)) {
        for (const match of html.matchAll(/href="([^"$]+)"/g)) checkLocalLink(match[1], file);
    }
}
const baseline = name => execFileSync('git', ['show', 'HEAD:' + name], { cwd: root, encoding: 'utf8', maxBuffer: 2 ** 22 });
const oldHtml = baseline('article-template.html');
const oldContext = vm.createContext({});
vm.runInContext(baseline('news-data.js') + '\n' + oldHtml.slice(oldHtml.indexOf('const articleBodies ='), oldHtml.indexOf('function formatEditorialDate')) + '\nglobalThis.oldArticles = articles;', oldContext);
for (const article of oldContext.oldArticles) assert.equal(articleContent[article.id], article.content, `Existing body changed: ${article.id}`);
const protectedFiles = ['api/matches.js', 'api/standings.js', 'matches-data.js', 'matches.html', 'standings.html', 'streams.js', 'watch-live.html', 'match-ids.html', 'history-data.js', 'site-config.js', 'site-header.js', 'vercel.json', 'robots.txt', 'ads.txt', 'privacy.html', 'terms.html', 'contact.html', 'sw.js'];
for (const file of protectedFiles) assert.equal(read(file).replace(/\r\n/g, '\n'), baseline(file).replace(/\r\n/g, '\n'), `Protected file changed: ${file}`);
for (const file of ['index.html', 'news.html', 'article-template.html', 'about.html']) {
    const loaders = html => Array.from(html.matchAll(/<script\b[^>]*src="(?:https:\/\/(?:pagead2\.googlesyndication\.com|cloud\.umami\.is)[^"]*|\/_vercel\/insights\/script\.js)"[^>]*>[\s\S]*?<\/script>/g), match => match[0].replace(/\r\n/g, '\n'));
    assert.deepEqual(loaders(read(file)), loaders(baseline(file)), `Advertising/analytics changed: ${file}`);
}
assert(read('match-ids.html').includes('noindex'));
assert(read('offline.html').includes('noindex'));
console.log(`PASS: ${published.length} published bodies, ${articles.length - published.length} excluded drafts, unique metadata, contextual/related links, sitemap parity, inline JavaScript syntax, preserved existing bodies, ${protectedFiles.length} protected files, advertising and analytics loaders.`);
