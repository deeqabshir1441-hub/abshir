# Production crawlability fixes

Verdict: PASS for the requested technical implementation and local validation. This is not a claim of Google AdSense approval or a deployed-production verification. Nothing was committed, pushed or deployed.

## Implementation and files

- Generated 23 complete `articles/{id}.html` files: IDs 1, 2, 3, 4, 7, 8, 9, 10, 11 and 12 through 25. These are generated artifacts, not 23 manually maintained bodies.
- Created `.editorial/content-model.cjs` and `.editorial/generate-static.cjs`; moved the body source and shared template to `.editorial/article-content.js` and `.editorial/article-template.html`; created `.editorial/news-data.js` as central editable metadata.
- Public `news-data.js` now contains only published metadata and enhancement helpers. No article-body bundle deploys. Both unpublished legacy bodies remain intact internally.
- `news.html` now contains all 23 article cards and three featured links in raw HTML. Filtering/pagination enhance the already-present content.
- `vercel.json` removes only the article catch-all rewrite and adds 23 allowlisted legacy-query redirects. Clean URLs, trailing-slash behavior, ads.txt header and all original redirects remain intact. Added `.vercelignore` to exclude the entire `.editorial/` directory and `404.html` for the error document.
- `index.html` removes two unused SDK script tags, four unavailable-league labels and two unavailable-app labels. SDK names had no consumers elsewhere in that page. Its only inline JavaScript changes replace three remote placeholder URL literals with the original local `football-fallback.svg` asset created for this task. No photographs were downloaded.
- Updated `.editorial/sync-content.cjs`, `validate-content.cjs`, `browser-check.cjs`, `browser-results.json` and README. Added `static-server.cjs`, `raw-html-check.cjs`, `raw-html-results.json` and this report.
- Deleted from the public root: `article-content.js` and `article-template.html`; their central sources are preserved internally. No draft body was deleted.
- `sitemap.xml` was regenerated with identical content: 23 published articles and eight main pages.

## Validation

All commands completed successfully:

- `node .editorial/sync-content.cjs`
- `node .editorial/validate-content.cjs` (includes generator `--check`)
- `node .editorial/raw-html-check.cjs`
- `node .editorial/browser-check.cjs`
- `node .editorial/api-smoke.cjs`
- `git diff --check`

Raw local HTTP checks use the generated files without executing JavaScript. All 23 returned HTTP 200, complete unchanged bodies (499-938 words), exactly one real H1, unique titles/descriptions, correct canonicals, Open Graph fields, Article JSON-LD, author/date/read time, internal links and three published related links. Local link/image/script targets were checked. All 23 initial News links are published; no draft links appear.

| Raw HTTP check | Result |
| --- | --- |
| `/articles/12` | 200; full real content and metadata below |
| `/articles/99999` | 404 |
| `/articles/5`, `/articles/6`, `/articles/26` | 404 |
| Remaining draft IDs 27-31 | 404 |
| `/.editorial/REPORT.md` | 404; contents not served |
| Tested internal drafts, body source, metadata and browser report paths | 404 |
| `/article-content.js` | 404; retired public body bundle absent |
| Published legacy `/article-template.html?id={id}` routes | 308 to the same published clean URL |
| Invalid legacy IDs | 404 |
| Sitemap | 31 unique HTTP-200 URLs; exact 23+8 parity |

These HTTP results are from a local production-style server honoring the configured exclusions, clean URLs and redirects, not from a newly deployed Vercel environment. No Vercel CLI or production deployment was run. The deployment exclusion and clean URL behavior follow [Vercel's exclusion documentation](https://vercel.com/docs/deployments/vercel-ignore) and [static configuration documentation](https://vercel.com/docs/project-configuration/vercel-json). An authorized preview should repeat the HTTP checks before production release.

Chromium validated all 23 pages at 360px and 1440px, News at 320/360/768/1440px, category filters, Load More, legacy/draft routes, navigation and theme control. With JavaScript disabled, article 12 retained its full body and News retained all 23 cards at 360px without overflow. Mobile screenshots were inspected. Browser tests mock external scripts and football data; they do not test real ads, analytics delivery or upstream availability.

Matches and Standings rendered deterministic fixtures. Existing API tests passed method/league guards, match IDs/scores/logos, official standings and calculated fallback. Streaming remains disabled. The validator compares 17 protected files against pre-fix `16e286e`, including both APIs, stream/player, match IDs/data, site configuration and service worker. Homepage inline scripts are compared exactly except the authorized fallback literals. All 11 original bodies are compared against pre-expansion `9ee47c6`; every body including drafts is also compared against `16e286e`. All 31 metadata records were preserved (absent draft word counts default to zero). Draft body paragraphs were checked absent from all public root HTML/JS and generated articles.

Advertising and analytics loaders, including publisher ID, match their prior versions in public pages and all generated article pages. No duplicate article AdSense loaders were introduced. No environment variables, token handling, football integrations, standings calculations, match filters or player logic changed. The entire change set was reviewed: the large diff comes from generated content and relocating sources.

## Actual raw HTML example: /articles/12

These excerpts were read from the generated HTML delivered by the local HTTP test, not a JavaScript-rendered DOM.

```html
<title id="page-title">How the Premier League Works: Complete Guide | TV96 Live</title>
<meta id="meta-description" name="description" content="Understand the Premier League&#39;s 20-team season, points, table, tiebreakers, title, relegation and European routes with worked examples.">
<link id="canonical-url" rel="canonical" href="https://www.tv96live.org/articles/12">
<h1 class="hero-title" id="articleTitle">How the Premier League Works: Complete Guide</h1>

<p>The Premier League is a season-long contest in which every club faces the same set of opponents. A dramatic victory can change the mood around a team, but the title belongs to the side that finishes the full programme at the top of the table. Understanding that difference between a match result and a season result makes the competition much easier to follow.</p>

<p>This guide explains the basic machinery: who plays whom, how results become points, and what the final positions mean. For a broader approach to following the competition week by week, use our <a href="/articles/20">Premier League Guide</a>.</p>

<p>The league has 20 clubs. Each plays the other 19 twice, once at home and once away, producing 38 league matches per team. Across the division that means 380 fixtures: adding all clubs' 38 matches counts each game twice, so 20 multiplied by 38 must be divided by two.</p>
```

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How the Premier League Works: Complete Guide",
  "description": "Understand the Premier League's 20-team season, points, table, tiebreakers, title, relegation and European routes with worked examples.",
  "mainEntityOfPage": "https://www.tv96live.org/articles/12",
  "url": "https://www.tv96live.org/articles/12",
  "datePublished": "2026-09-05T12:00:00+03:00",
  "articleSection": "Premier League",
  "author": {
    "@type": "Organization",
    "name": "TV96 Live Editorial Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TV96 Live"
  },
  "wordCount": 792,
  "inLanguage": "en"
}
```

## Deferred image rights and AdSense risks

- HIGH, explicitly deferred: local photographs `news image/8.png`, `news image/9.png`, `news image/10.png`, `news image/11.png` have uncertain ownership/licensing. Being served locally does not establish ownership. Their prior `imageReviewRequired: false` flags are not evidence of rights clearance. No new copyrighted image was added or copied.
- MEDIUM, editorial review: old news reporting was preserved, not newly fact-checked. IDs 8-9 include broad Sky Sports/UEFA landing pages; obtain precise reporting references where appropriate. Review historical date/claim consistency separately.
- LOW, existing utility-page risk: the noindex offline utility page retains its existing ad loader and little content; this task did not change its monetization. No new ad placement was added there.
- Operational limit: generated outputs must be refreshed locally before deployment. The excluded generator is not a Vercel build command. The stale-output validator detects mismatches. Live exclusion/routing still needs verification on an authorized preview.

Google still decides indexing and AdSense approval. Static content removes the JavaScript dependency; it does not certify image rights, historical accuracy or approval. Google recommends server-rendering/pre-rendering for users and crawlers: [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## Per-article raw response results

| URL | HTTP | Body words | H1 | Related |
| --- | --- | --- | --- | --- |
| /articles/1 | 200 | 499 | 1 | 3 |
| /articles/2 | 200 | 500 | 1 | 3 |
| /articles/3 | 200 | 514 | 1 | 3 |
| /articles/4 | 200 | 512 | 1 | 3 |
| /articles/7 | 200 | 512 | 1 | 3 |
| /articles/8 | 200 | 502 | 1 | 3 |
| /articles/9 | 200 | 938 | 1 | 3 |
| /articles/10 | 200 | 860 | 1 | 3 |
| /articles/11 | 200 | 786 | 1 | 3 |
| /articles/12 | 200 | 792 | 1 | 3 |
| /articles/13 | 200 | 804 | 1 | 3 |
| /articles/14 | 200 | 810 | 1 | 3 |
| /articles/15 | 200 | 782 | 1 | 3 |
| /articles/16 | 200 | 823 | 1 | 3 |
| /articles/17 | 200 | 839 | 1 | 3 |
| /articles/18 | 200 | 854 | 1 | 3 |
| /articles/19 | 200 | 885 | 1 | 3 |
| /articles/20 | 200 | 802 | 1 | 3 |
| /articles/21 | 200 | 834 | 1 | 3 |
| /articles/22 | 200 | 839 | 1 | 3 |
| /articles/23 | 200 | 814 | 1 | 3 |
| /articles/24 | 200 | 843 | 1 | 3 |
| /articles/25 | 200 | 840 | 1 | 3 |

## git diff --stat

Tracked changes only; standard git diff does not include untracked new pages and tools. See status below for those files.

```text
 .editorial/README.md            |  26 +-
 .editorial/browser-check.cjs    |  40 +-
 .editorial/browser-results.json |   4 +-
 .editorial/sync-content.cjs     |  37 +-
 .editorial/validate-content.cjs |  36 +-
 article-content.js              | 397 -----------------
 article-template.html           | 602 --------------------------
 index.html                      |  24 +-
 news-data.js                    | 935 ++++++++++++++++++++++++++--------------
 news.html                       | 252 +++++++++--
 vercel.json                     | 282 +++++++++++-
 11 files changed, 1174 insertions(+), 1461 deletions(-)
```

## git status --short

```text
 M .editorial/README.md
 M .editorial/browser-check.cjs
 M .editorial/browser-results.json
 M .editorial/sync-content.cjs
 M .editorial/validate-content.cjs
 D article-content.js
 D article-template.html
 M index.html
 M news-data.js
 M news.html
 M vercel.json
?? .editorial/PRODUCTION-FIXES-REPORT.md
?? .editorial/article-content.js
?? .editorial/article-template.html
?? .editorial/content-model.cjs
?? .editorial/generate-static.cjs
?? .editorial/news-data.js
?? .editorial/raw-html-check.cjs
?? .editorial/raw-html-results.json
?? .editorial/static-server.cjs
?? .vercelignore
?? 404.html
?? articles/
?? football-fallback.svg
```
