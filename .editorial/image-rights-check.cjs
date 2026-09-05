const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const model = require('./content-model.cjs');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const safe = new Set(['/editorial-fallback.png', '/football-fallback.svg']);
const targets = ['index.html', 'news.html', 'news-data.js', ...model.getPublishedArticles().map(a => `articles/${a.id}.html`)];
for (const file of targets) {
    const html = read(file);
    assert(!/news(?:%20| )image\//i.test(html), `Uncertain editorial image reference: ${file}`);
    assert(!/imageCandidate/.test(html), `Private candidate metadata: ${file}`);
    assert(!/property="og:image" content="[^" ]*icon-512/.test(html));
    if (file.startsWith('articles/')) {
        for (const match of html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) assert(safe.has(match[1]), `Unapproved article image: ${match[1]}`);
        const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
        assert(!schema.image || schema.image === 'https://www.tv96live.org/editorial-fallback.png');
        assert(html.includes('property="og:image" content="https://www.tv96live.org/editorial-fallback.png"'));
    }
}
for (const a of model.getPublishedArticles()) {
    assert(!a.image || safe.has(a.image));
    assert(!/<img\b/.test(model.articleContent[a.id]));
    assert(a.sources?.length);
    for (const source of a.sources) assert(!['https://www.skysports.com/', 'https://www.skysports.com/football', 'https://www.uefa.com/uefaeuropaleague/'].includes(source.url));
}
for (const id of [1,2,3,4,7]) assert.equal(model.articles.find(a => a.id === id).image, '');
for (const file of ['offline.html', 'watch-live.html']) assert(!/pagead2\.googlesyndication|adsbygoogle/.test(read(file)));
assert(fs.statSync(path.join(root, 'editorial-fallback.png')).size < 50000);
console.log('PASS: safe editorial images, original lightweight fallback, suppressed candidates, no broad reporting citations and no utility-page ad loaders.');
