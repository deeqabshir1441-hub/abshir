# TV96 Live editorial expansion — 5 September 2026

Implemented in the existing HTML/CSS/JavaScript architecture. No deployment, commit or push was performed.

## Library before and after

- Before: 9 published articles and 2 unpublished items.
- After: 23 published articles and 8 unpublished items.
- Added: 14 original evergreen guides, approximately 11,561 body words in total, plus 6 season-guide draft briefs.
- Preserved: all 11 existing effective article bodies, including the nine published articles, with exact-string comparison against the original implementation.

| New published article | ID | Approximate body words |
| --- | ---: | ---: |
| How the Premier League Works: Complete Guide | 12 | 792 |
| How Champions League Qualification Works | 13 | 804 |
| Champions League Format Explained | 14 | 810 |
| What Is Goal Difference in Football? | 15 | 782 |
| What Is Expected Goals (xG)? | 16 | 823 |
| How VAR Works in Football | 17 | 839 |
| Premier League Relegation Explained | 18 | 854 |
| How European Qualification Works in the Premier League | 19 | 885 |
| Premier League Guide | 20 | 802 |
| La Liga Guide | 21 | 834 |
| Serie A Guide | 22 | 839 |
| Bundesliga Guide | 23 | 814 |
| Ligue 1 Guide | 24 | 843 |
| UEFA Champions League Guide | 25 | 840 |

Word counts exclude markup and the template's metadata, sources and related cards. They are descriptive, not an AdSense threshold. New examples are explicitly hypothetical. The articles distinguish rule explanations from competition-following guides to avoid duplicating the same introduction and body across the library.

## Drafts intentionally excluded

IDs 26–31 reserve Manchester United, Arsenal, Liverpool, Manchester City, Real Madrid and Barcelona 2026/27 Season Guides. Each has a club-specific brief, evidence requirements and a publication gate in season-drafts.md. Current managers, transfers, injuries, squads, statistics, form and competition entries were not invented. The project did not supply a complete verified current-season dossier, so these remain drafts.

The existing Lukaku and Sørloth drafts (IDs 5–6) remain excluded as well. None of the eight drafts appears in News, homepage features, related reading or sitemap. Direct article requests display an unavailable page with noindex; no draft body is rendered.

## Organization and discovery

News now has featured guides, an editorial introduction, a complete filterable library and an announced article count. Filters cover Latest News, Football Guides and League & Competition Guides, plus the published categories. The Football Guides filter contains eight explainers; the competition-guide filter contains six guides; Latest News retains all nine original published reports. Load More exposes the entire library.

Published categories used: Premier League, Champions League, Football Guides, La Liga, Serie A, Bundesliga, Ligue 1, Transfers, FIFA World Cup and Europa League. Team Guides is reserved for the excluded drafts. Empty Team Guides or Match Analysis sections were not fabricated.

The homepage features four selected guides and links to News & Guides. News cards carry an excerpt, category, date and reading time; image-free cards use the existing brand colors without empty photo frames or new external imagery. About now describes the guide library, illustrative examples, source practice and publication review. Existing Contact, Privacy and Terms content was already substantial and was retained.

## Article and SEO changes

- One H1 per published article, descriptive H2 sections, author, category, publication date, existing updated-date support and calculated reading time.
- Unique title, description, canonical and Open Graph values now come from the central metadata record for every published ID, including legacy query URLs.
- Fixed the missing canonical/Open Graph coverage for existing IDs 8–11 and removed the earlier hard-coded date/map mismatch.
- Added Article JSON-LD using the visible title, description, author, publication date, category and actual body word count. No ratings, invented people or unsupported credentials.
- Added three relevant, published related articles per page, contextual links in every new guide, a News & Guides return link and visible sources/correction contact.
- Improved article width, paragraph rhythm, heading spacing, list layout, card wrapping and keyboard focus styling while retaining branding.
- Missing/unpublished routes are noindex in the rendered page. Existing match-ids/offline noindex remains; Matches and Standings remain indexable.

The sitemap now contains 31 URLs: eight main public pages and all 23 published articles, each article with a publication/update lastmod. It contains no drafts, helper pages, APIs or stream files. All article entries match the existing numeric Vercel rewrite. No pre-existing missing published article ID was found; the concrete repaired defects were metadata coverage and absent related/contextual discovery rather than a broken published route.

## Source checking

Rules were checked against competition/authority material and linked from the relevant guides. Two timely checks prevented outdated explanations: the [IFAB 2026/27 changes](https://theifab.com/law-changes/latest/) and the [EFL Championship play-off change](https://www.efl.com/news/2026/march/05/efl-statement--sky-bet-championship-play-off-format/). The articles also link UEFA regulations/access explanations, Premier League guidance, official league material and the xG provider's methodology. Source prose was not copied into the guides; worked examples and interpretation are original.

## Files created

- article-content.js — central effective article bodies, loaded only by article-template.html; replaces duplicated original/replacement body storage inside that template.
- .editorial/AUDIT.md — pre-edit inventory, existing article counts, strengths and issues.
- .editorial/season-drafts.md — six excluded season briefs and evidence requirements.
- .editorial/README.md — maintenance instructions and architecture limitations.
- .editorial/sync-content.cjs — derives word counts and published-only sitemap.
- .editorial/validate-content.cjs — content graph, syntax, preservation and metadata checks.
- .editorial/browser-check.cjs — isolated Chromium rendering and interaction checks.
- .editorial/api-smoke.cjs — deterministic smoke tests for the unchanged API handlers.
- .editorial/browser-results.json — successful browser-check record.
- .editorial/REPORT.md — this report.

## Files modified

- news-data.js — guide metadata, draft reservations, explicit publication filtering, related/featured helpers and reading-time counts.
- article-template.html — shared body loading, complete metadata, structured data, related reading and unavailable-route handling.
- news.html — editorial landing copy, feature cards, filters, accessible count, reading time and safe text rendering.
- index.html — editorial section wording and four curated cards only.
- news-style.css — scoped editorial readability, grid and image-free-card styling.
- about.html — concise guide/editorial-process additions.
- sitemap.xml — published library and lastmod synchronization.

## Intentionally untouched

api/matches.js, api/standings.js, matches-data.js, matches.html, standings.html, streams.js, watch-live.html, match-ids.html, history-data.js, site-config.js, site-header.js, vercel.json, robots.txt, ads.txt, contact.html, privacy.html, terms.html and sw.js are unchanged against HEAD. Existing assets, team logos, general styles/bundles and deployment/environment settings were not edited. No production token was required or exposed.

Existing AdSense publisher ID and script loaders, Umami and Vercel analytics were retained. The checks found at most one AdSense script loader per page. No ad placements, new tracking or media libraries were introduced.

## Validation performed

All final checks passed:

- `node .editorial/validate-content.cjs`: 23 nonempty published bodies, eight excluded drafts, unique metadata/IDs, contextual and related links, exact sitemap parity, inline JavaScript syntax, preserved old bodies, 18 protected files and unchanged advertising/analytics loaders.
- `node .editorial/browser-check.cjs`: all 23 article routes load in Chromium, exactly one H1, correct canonical/Open Graph/JSON-LD, three related cards; article layouts at 360px and 1440px; News at 320px, 360px, 768px and 1440px; all category filters and Load More; all eight draft routes; an unknown ID and legacy query route; homepage editorial cards; navigation open/close and theme toggle.
- The browser also rendered match cards and standings rows with deterministic local API fixtures and retained the already-disabled Watch Live state. The homepage fits after its existing entrance animations finish; no unrelated animation changes were needed.
- `node .editorial/api-smoke.cjs`: existing method/league guards, preserved IDs/scores/logos, official standings and calculated fallback with mocked upstream responses.
- `git diff --check`: no whitespace errors after the final correction. Inspected the diff; only the editorial changes listed above are present.

Browser tests stub external scripts and football responses; they do not verify real upstream availability, live advertising, analytics delivery or broadcast playback. No production deployment was made. Screenshot paths are recorded in browser-results.json. AdSense/analytics protection is supported by source comparison, not by sending test traffic to those services.

## Remaining limitations and review risks

1. Approval remains Google's decision. This work adds substantive reader value but cannot guarantee AdSense approval.
2. Existing news reports were preserved, not newly certified as current/accurate. Some older source links are broad publication pages, particularly IDs 8–9; exact reporting sources and existing image rights still need an owner/editorial review.
3. The existing JavaScript template still supplies generic initial HTML to crawlers that do not execute JavaScript. Rendered metadata is fixed, but universal social previews would require a separate prerender/server-response change. Unknown/draft routes remain HTTP soft-404s behind the static rewrite, with rendered noindex.
4. The offline utility page already includes an ad script despite limited content; this was documented, not expanded or used as a place for additional ads.
5. Streaming was disabled before this task. The player, stream file, configuration and redirects remain unchanged; functioning real broadcasts were not claimed or tested.
6. Current-season drafts require fresh evidence before publication. Rules and allocations should be checked again when seasons or official regulations change. The existing standings fallback may differ from competition-specific final tiebreakers, so guides direct readers to official adjudication.

## Final git status / changed-file list

```text
 M about.html
 M article-template.html
 M index.html
 M news-data.js
 M news-style.css
 M news.html
 M sitemap.xml
?? .editorial/AUDIT.md
?? .editorial/README.md
?? .editorial/REPORT.md
?? .editorial/api-smoke.cjs
?? .editorial/browser-check.cjs
?? .editorial/browser-results.json
?? .editorial/season-drafts.md
?? .editorial/sync-content.cjs
?? .editorial/validate-content.cjs
?? article-content.js
```

No commit or push was performed.
