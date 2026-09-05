# Editorial audit — 5 September 2026

Recorded before implementation. Initial git status was clean. No repository AGENTS.md or package manifest was found. This is a static HTML/CSS/JavaScript site with Vercel API handlers and a numeric article rewrite, not a framework application.

## Existing library

Nine published articles; two drafts. Approximate visible body word counts (images and markup excluded):

| ID | Subject | Words | Assessment |
| --- | --- | ---: | --- |
| 1 | Éderson renewal | 499 | Moderate news summary; preserve |
| 2 | Trossard transfer | 500 | Moderate news summary; preserve |
| 3 | Messi assists | 514 | Moderate statistics explanation; preserve |
| 4 | Manzambi transfer | 512 | Moderate news summary; preserve |
| 7 | Mbappé contributions | 512 | Moderate statistics explanation; preserve |
| 8 | Arsenal transfer latest | 502 | Moderate transfer summary; preserve |
| 9 | Europa League draw | 938 | Substantial news article; preserve |
| 10 | Álvarez meeting | 860 | Substantial transfer article; preserve |
| 11 | Fernández omission | 786 | Substantial transfer article; preserve |
| 5 | Lukaku interview | 157 | Thin, unverified; already unpublished |
| 6 | Sørloth reaction | 18 | Placeholder draft; already unpublished |

The published bodies all have introductions, paragraphs and 3–9 H2 headings, with a single shared H1, category, author, publication date, and updated-date support. They have no contextual internal links or related articles. Reading time is absent. Existing short published items are not empty placeholders; the main gap is breadth and evergreen usefulness, not merely length. Existing reporting is preserved, not newly certified as verified by this audit. Several source links are publication homepages rather than exact reports, especially IDs 8–9; exact sources and image rights warrant an owner review.

## Routing, discovery and metadata

news-data.js supplies metadata and publication status. article-template.html contains original and replacement bodies; the replacement wins at runtime. /articles/:id rewrites to the template and supports numeric IDs and legacy query links. All nine published IDs resolve to nonempty bodies and all nine occur in News's filter/load-more collection and sitemap. No missing published article ID was found. Draft IDs 5–6 are excluded. News initially shows six cards and the homepage four.

The template metadata map covers only IDs 1–4 and 7. IDs 8–11 get runtime titles/descriptions but retain the generic canonical/Open Graph values. Dates in the early metadata map are hard-coded. There is no Article JSON-LD. Missing article routes display an error with no noindex directive. Generic template HTML depends on JavaScript; social crawlers that do not execute it cannot reliably read article metadata.

## Project map and protected behavior

- Homepage: index.html; News: news.html; article styles: news-style.css and template inline CSS, supplemented by style.css/site-chrome.css. Existing image review flags suppress uncertain images; safe gradient cards are available.
- Navigation: page header/footer markup with site-header.js. Existing public links use clean URLs.
- Matches: matches.html and matches-data.js, fetching /api/matches; homepage shares this data. API aggregates football-data.org competitions, caches/rate-limits upstream results and preserves overrides/IDs. Featured match behavior is separate.
- Standings: standings.html and /api/standings; allowed leagues PL, PD, SA, BL1, FL1, CL. Existing fallback reconstructs tables from results using points/GD/GF. This can differ from official competition-specific tiebreaks; editorial guides must not present it as an official final adjudication.
- Tokens are read server-side through process.env.FOOTBALL_DATA_TOKEN. No credentials are needed for this editorial change.
- Watch Live: watch-live.html, streams.js, history-data.js and site-config.js. STREAMING_ENABLED is already false; Vercel redirects streams.js and match-ids. Preserve that state and all player logic.
- match-ids.html is already noindex/nofollow; offline.html is noindex/follow. Neither is in the sitemap. robots.txt allows crawling and names the sitemap. Legitimate Matches and Standings remain indexable.
- About already covers identity, editorial approach, accuracy and corrections. Contact provides support@tv96live.org and correction/rights/technical contact instructions. Privacy and Terms contain substantial service-specific text; no fabricated staff or addresses are needed.
- Match/standings pages are functional utility pages, not text placeholders. Watch Live's unavailable state and offline fallback are intentionally technical. The offline page already loads an ad script despite its limited content; flag for later owner review, outside this content change.
- AdSense publisher ca-pub-9924964891667864 occurs once per page that loads its script; no duplicated script loader found. Existing Umami (homepage) and Vercel analytics must be retained byte-for-byte.
- vercel.json, assets, service worker, API routes, tokens, streaming, deployment settings and football filtering will remain untouched.

## Implementation decision

Extend central metadata and move effective article bodies into one reusable article-content.js file loaded only on article pages. Retain each effective published body. Add 14 distinct evergreen guides, differentiated between rules explainers and competition-following guides. Add six explicitly unpublished 2026/27 structures because the project lacks sufficient authoritative current squad, management, injury and form evidence. Keep draft content out of rendered pages, discovery, related links and sitemap. Use current official rules, including the 2026/27 VAR changes, and original worked examples rather than copied source prose.
