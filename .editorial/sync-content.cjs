// Local editorial maintenance only. No dependencies, network, tokens or API changes.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const context = vm.createContext({});
vm.runInContext(read('news-data.js') + '\n' + read('article-content.js') + '\nglobalThis.data = { articles, articleContent };', context);
const { articles, articleContent } = context.data;
const counts = {};
for (const article of articles.filter(article => article.isPublished === true)) {
    const body = articleContent[article.id];
    if (!body?.trim()) throw new Error(`Missing published body: ${article.id}`);
    counts[article.id] = body.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).length;
}
const startMarker = '// BEGIN GENERATED WORD COUNTS';
const endMarker = '// END GENERATED WORD COUNTS';
let metadata = read('news-data.js');
const start = metadata.indexOf(startMarker);
if (start !== -1) {
    const end = metadata.indexOf(endMarker, start);
    if (end === -1) throw new Error('Incomplete word-count markers');
    metadata = metadata.slice(0, start) + metadata.slice(end + endMarker.length).trimStart();
}
metadata = metadata.trimEnd() + '\n\n' + startMarker + '\nconst articleWordCounts = ' + JSON.stringify(counts, null, 4) + ';\narticles.forEach(article => { article.wordCount = articleWordCounts[article.id] || 0; });\n' + endMarker + '\n';
fs.writeFileSync(path.join(root, 'news-data.js'), metadata);
const pages = ['', 'matches', 'standings', 'news', 'about', 'contact', 'privacy', 'terms'];
const urls = pages.map(page => `  <url><loc>https://www.tv96live.org/${page}</loc></url>`);
for (const article of articles.filter(article => article.isPublished === true)) {
    const date = (article.updatedAt || article.publishedAt).slice(0, 10);
    urls.push(`  <url><loc>https://www.tv96live.org/articles/${article.id}</loc><lastmod>${date}</lastmod></url>`);
}
fs.writeFileSync(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n');
console.log(`Synced ${Object.keys(counts).length} published articles; ${articles.length - Object.keys(counts).length} drafts excluded.`);
for (const article of articles.filter(article => article.id >= 12 && article.isPublished)) console.log(`${article.id}: ${counts[article.id]} words — ${article.title}`);
