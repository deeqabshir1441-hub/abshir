// Keep public, crawlable header/footer HTML aligned with the homepage.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const home = read('index.html');
const headerMatch = home.match(/<header class="main-header">[\s\S]*?<\/header>/);
const footerMatch = home.match(/<footer class="main-footer">[\s\S]*?<\/footer>/);
assert(headerMatch && footerMatch, 'Homepage site chrome missing');
const header = headerMatch[0];
const footer = footerMatch[0];
const pages = [
    ['news.html', '/news'], ['matches.html', '/matches'], ['standings.html', ''],
    ['about.html', '/about'], ['contact.html', ''], ['privacy.html', '/privacy'],
    ['terms.html', ''], ['watch-live.html', ''],
    ['.editorial/article-template.html', '/news']
];
const check = process.argv.includes('--check');
const normalize = value => value.replace(/\r\n/g, '\n');
for (const [file, active] of pages) {
    let html = read(file);
    const currentHeader = html.match(/<header class="main-header">[\s\S]*?<\/header>/);
    const currentFooter = html.match(/<footer class="main-footer">[\s\S]*?<\/footer>/);
    assert(currentHeader && currentFooter, `Missing site chrome: ${file}`);
    let expectedHeader = header.replace('<a href="/" class="nav-link active">', '<a href="/" class="nav-link">');
    if (active) expectedHeader = expectedHeader.replace(`<a href="${active}" class="nav-link">`, `<a href="${active}" class="nav-link active">`);
    assert(!active || expectedHeader.includes(`<a href="${active}" class="nav-link active">`), `Unknown active link: ${file}`);
    const newline = html.includes('\r\n') ? '\r\n' : '\n';
    expectedHeader = normalize(expectedHeader).replace(/\n/g, newline);
    const expectedFooter = normalize(footer).replace(/\n/g, newline);
    if (check) {
        assert.equal(normalize(currentHeader[0]), normalize(expectedHeader), `Header drift: ${file}`);
        assert.equal(normalize(currentFooter[0]), normalize(expectedFooter), `Footer drift: ${file}`);
        assert(html.includes('lucide@0.263.0/dist/umd/lucide.min.js'), `Missing shared icons: ${file}`);
        continue;
    }
    html = html.replace(currentHeader[0], expectedHeader).replace(currentFooter[0], expectedFooter);
    if (!html.includes('lucide@0.263.0/dist/umd/lucide.min.js')) {
        html = html.replace('</head>', `    <script defer src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>${newline}</head>`);
    }
    fs.writeFileSync(path.join(root, file), html);
    console.log(`Updated site chrome: ${file}`);
}
console.log(`PASS: homepage header/footer ${check ? 'verified on' : 'copied to'} ${pages.length} static sources.`);
