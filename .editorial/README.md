# Maintaining the TV96 Live editorial library

The website remains plain HTML, CSS and JavaScript. /articles/:id uses the existing Vercel rewrite and article-template.html. No deployment setting or API route was changed.

1. Add or update the metadata record in news-data.js. Evergreen entries use guideDefinitions; the original news records remain in articles. Every publishable record needs a unique numeric ID, title, description, category, author, publication date and sources. Set isPublished explicitly; only true is public. Use updatedAt only for an actual editorial revision.
2. Add the trusted HTML body under the same ID in article-content.js. Use paragraphs and H2/H3 headings, never another H1. The template supplies the sole page H1, metadata, sources, correction contact and related cards. Write original prose and make illustrative numbers explicitly hypothetical.
3. Assign three relevant published relatedIds. The renderer filters unpublished and missing IDs and fills gaps with contextual published reading.
4. Run `node .editorial/sync-content.cjs` to refresh word counts, reading times and published-only sitemap entries. This is a local maintenance command, not a new production build requirement.
5. Run `node .editorial/validate-content.cjs`. It checks the content graph, sitemap, metadata and preservation against the original HEAD. After this task is committed, the baseline-preservation portion must be updated or removed for future intentional edits; the ordinary content checks remain reusable.
6. Run `node .editorial/browser-check.cjs` for Chromium rendering and interaction checks, or `node .editorial/api-smoke.cjs` for deterministic API smoke tests. The browser checker uses an isolated temporary profile and mocked external scripts/football data; it does not exercise real advertising, analytics, upstream availability or broadcasts. Screenshots are written to the printed temporary directory. Neither command requires production credentials.

News builds its visible category buttons from published metadata and has separate Latest News, Football Guides and League & Competition Guides filters. `getFeaturedArticles` selects four curated published IDs for homepage discovery and three for News. Change that list deliberately when featuring new work. Full bodies load only on article pages; homepage/News need only the small metadata file.

The six 2026/27 briefs are in season-drafts.md. Their reserved IDs 26–31 remain explicitly unpublished. Do not import that brief into public HTML or link to it from the site. Draft IDs 5–6 from the original project also remain excluded. These local dot-directory documents are maintenance material, not editorial website pages.

## Known architecture limits

The existing template renders article bodies and route-specific metadata with JavaScript. Non-JavaScript preview crawlers still see generic initial HTML. Missing/draft routes display a noindex error in the browser, but the static rewrite does not return a real HTTP 404. Solving those server-response limitations would require a separate routing/prerendering change and was deliberately not folded into this content task.

Official standings rules can differ from the existing API's calculated fallback order. Guides explain that official competition decisions settle exceptional ties; the API is unchanged. Match feeds may also contain only selected clubs for some leagues, so the guides describe available fixtures rather than promising complete coverage.
