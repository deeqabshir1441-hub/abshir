// Local production-style static checks, not a replacement Vercel runtime.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const exclusions = fs.readFileSync(path.join(root, '.vercelignore'), 'utf8').split(/\r?\n/).map(s => s.trim()).filter(s => s && !s.startsWith('#'));
module.exports = function serve(req, res) {
    const url = new URL(req.url, 'http://localhost');
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { res.statusCode = 400; return res.end('Bad request'); }
    const file = pathname.slice(1);
    const excluded = exclusions.some(rule => file === rule.replace(/\/$/, '') || file.startsWith(rule));
    function missing() {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(fs.readFileSync(path.join(root, '404.html')));
    }
    if (excluded || file.split('/').some(part => part.startsWith('.'))) return missing();
    const clean = config.cleanUrls ? pathname.replace(/\.html$/, '') : pathname;
    const redirect = (config.redirects || []).find(rule => rule.source === clean && (rule.has || []).every(condition => condition.type === 'query' && url.searchParams.get(condition.key) === condition.value));
    if (redirect) { res.writeHead(redirect.permanent ? 308 : 307, { Location: redirect.destination }); return res.end(); }
    if (clean !== pathname) { res.writeHead(308, { Location: clean + url.search }); return res.end(); }
    const relative = file || 'index.html';
    const candidate = path.resolve(root, relative);
    if (!candidate.startsWith(root + path.sep)) return missing();
    let resolved = candidate;
    if (config.cleanUrls && !path.extname(relative)) resolved += '.html';
    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) return missing();
    const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
    res.setHeader('Content-Type', (mime[path.extname(resolved)] || 'text/plain') + '; charset=utf-8');
    res.end(fs.readFileSync(resolved));
};
