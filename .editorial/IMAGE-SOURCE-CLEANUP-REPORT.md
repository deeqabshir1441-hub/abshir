# Final image-rights and editorial-source cleanup

Verdict: READY FOR PREVIEW DEPLOYMENT. No commit, push, deployment or AdSense review request was made. This verdict applies to the local changes and validation, not a guarantee of Google approval or a deployed HTTP check.

## Image decisions

No project licensing or original-creation evidence was found for the four active photographs. Their local filenames were not treated as permission. They have been removed from every published article record, News card, homepage editorial renderer input, Open Graph field and Article JSON-LD. No external image was fetched, scraped or copied. All original image files remain untouched on disk.

Articles 8-11 use one original 1200 x 630 PNG composed solely of TV96 Live text, a background, lines and circles. `.editorial/create-editorial-fallback.py` records its construction using installed fonts and no image inputs. Other articles retain text-only cards; all 23 use the new safe graphic for OG fallback. Article JSON-LD has the fallback for 8-11 and no image for text-only articles. The original code-created football SVG supplies favicons on the audited pages. No uncertain candidate path is serialized in public metadata.

For the same conservative reason, direct raster logo/icon uses were removed from article, News and homepage headers and head metadata. Text branding and the original SVG replace them. Shared application-manifest icons, other-page branding and match/league/team imagery are outside this editorial change and remain unchanged. This does not certify rights for those unrelated assets. Retired photographs remain files in the repository but are not used or linked by the audited editorial pages; no deployment exclusion settings were altered.

## Every audited asset

A = original site-created; B = documented licence (none found); C = uncertain; D = unsafe third-party/agency-marked without permission. Filenames suggesting an agency are not proof of a licence.

| Local file | Bytes | Dimensions | Classification | Use / decision |
| --- | ---: | --- | --- | --- |
| news image/1.jpg | 20,221 | 596 x 335 | C - uncertain; no permission evidence | Article 1: already suppressed candidate; remains suppressed |
| news image/10.png | 2,483,603 | 1536 x 1024 | C - uncertain; no permission evidence | Article 10: News cards, OG and Article JSON-LD; replaced everywhere |
| news image/11.png | 2,169,404 | 1536 x 1024 | C - uncertain; no permission evidence | Article 11: News cards, OG and Article JSON-LD; replaced everywhere |
| news image/2.jpeg | 31,081 | 900 x 600 | C - uncertain; no permission evidence | Article 2: already suppressed candidate; remains suppressed |
| news image/3.jpg | 281,136 | 2048 x 1365 | C - uncertain; no permission evidence | Article 3: already suppressed candidate; remains suppressed |
| news image/4.jpg | 59,648 | 1024 x 576 | C - uncertain; no permission evidence | Article 4: already suppressed candidate; remains suppressed |
| news image/5.jpg | 34,940 | 547 x 365 | C - uncertain; no permission evidence | Not referenced by any of the 23 published editorial records; retained unused |
| news image/6.webp | 57,516 | 1380 x 690 | C - uncertain; no permission evidence | Not referenced by any of the 23 published editorial records; retained unused |
| news image/7.webp | 12,100 | 416 x 416 | C - uncertain; no permission evidence | Article 7: already suppressed candidate; remains suppressed |
| news image/8.png | 2,703,983 | 1536 x 1024 | C - uncertain; no permission evidence | Article 8: News cards, OG and Article JSON-LD; replaced everywhere |
| news image/9.png | 2,212,701 | 1536 x 1024 | C - uncertain; no permission evidence | Article 9: News cards, OG and Article JSON-LD; replaced everywhere |
| news image/fergusan.jpg | 432,777 | 1974 x 1316 | C - uncertain; no permission evidence | Not referenced by any of the 23 published editorial records; retained unused |
| news image/GettyImages-2166876546-2-scaled.jpg | 212,787 | 1200 x 800 | D - agency-marked, no licence evidence; unsafe to publish | Not referenced by any of the 23 published editorial records; retained unused |
| news image/GettyImages-2262861156.jpg.webp | 115,096 | 2419 x 1361 | D - agency-marked, no licence evidence; unsafe to publish | Not referenced by any of the 23 published editorial records; retained unused |
| news image/images.jpg | 7,892 | 300 x 168 | C - uncertain; no permission evidence | Not referenced by any of the 23 published editorial records; retained unused |
| logo/Logo.png | 746,006 | 940 x 705 | C - site branding, but creation/licence evidence absent | Removed direct usage from audited article/home/News headers, icons and OG; files and unrelated application/other-page usage unchanged |
| icon-512.png | 1,541,724 | 1024 x 1024 | C - site branding, but creation/licence evidence absent | Removed direct usage from audited article/home/News headers, icons and OG; files and unrelated application/other-page usage unchanged |
| icon-192.png | 1,540,419 | 1024 x 1024 | C - site branding, but creation/licence evidence absent | Removed direct usage from audited article/home/News headers, icons and OG; files and unrelated application/other-page usage unchanged |
| favicon.png | 704,956 | 653 x 649 | C - site branding, but creation/licence evidence absent | Removed direct usage from audited article/home/News headers, icons and OG; files and unrelated application/other-page usage unchanged |
| editorial-fallback.png | 22,391 | 1200 x 630 | A - original code-created text/geometry | Retained: editorial cards 8-11 and all article/home/News OG |
| football-fallback.svg | 329 | vector | A - original code-created text/geometry | Retained: original SVG favicon on audited pages; existing match fallback |

The four previously active PNGs total **9,569,691 bytes (9.57 MB)**. The shared replacement is **22,391 bytes (22.4 KB)**, a **99.77%** reduction in unique active photograph/fallback bytes. The original files were not recompressed or deleted. Browsers can reuse the same fallback URL across cards and pages. No multi-megabyte editorial card image remains active.

## Sources and factual corrections

All nine published news/reporting records were reviewed: 1, 2, 3, 4, 7, 8, 9, 10, 11. The 14 existing guides retain their bodies and sourcing. Dates on archived reporting are preserved; 6 September 2026 is the editorial revision date, not a claim of fresh reporting. All nine records now visibly distinguish sourced archive reporting or editorial analysis.

- **1:** The direct Atalanta announcement supports the extension and playing record; the already-recorded Sky Sport Italia report supplies the 2031 end date. Attribution now separates these. Interpretive discussion is labelled analysis.
- **2:** The direct Sky report supports the move, fee breakdown, appearance/goal/assist figures and reported recruitment options. Retained with archive/analysis labelling.
- **3:** FIFA's recorded URL returned no readable supporting content, including a direct HTTP retry; search did not verify the specific claims. Removed the ten-knockout-assist leadership assertion and six-tournament claim. Retained and developed the original explanation of statistical scope as explicitly labelled analysis, with a visible correction and a real existing internal further-reading link. This is not presented as a verified Messi record or as a new factual news report.
- **4:** The already-recorded direct Sky report supports the signing, reported fee, Newcastle pursuit and World Cup context. Removed unsupported medical/training-ground detail and the inaccessible Premier League item from the supporting source list.
- **7:** The direct Le Monde report supports eight goals plus three assists at its quarter-final cut-off. Retained the dated snapshot rather than presenting it as the final tournament total; archive/analysis label added.
- **8:** Replaced the generic Sky homepage with the direct Alvarez report already recorded for article 10. The direct Atletico board statement supports its Barcelona negotiating position. Removed Martinelli exit-talk assertions and the old headline implying progress. The revised headline/body clearly separate the club statement, reported Arsenal possibility and tactical analysis.
- **9:** Neither generic landing page substantiated the detailed draw. Removed all asserted opponent lists for six clubs, competition dates and final venues. Reworked the page into explicitly labelled original draw-reading analysis with a visible correction. Internal Champions League reading is labelled comparison material, not evidence of Europa/Conference League fixtures. No replacement fixture list or citation was invented.
- **10:** Cadena SER supports the reported overnight meeting. Removed the unsubstantiated EUR150 million claim, a third missed training session and unsupported Simeone statements. Corrected ownership-level discussion to the dialogue described by Sky; clarified that the dated reports did not announce a completed transfer. Retained original interpretive prose with archive/analysis labelling.
- **11:** Direct HTTP retrieval of the existing ESPN and Sky URLs succeeded after the browser tool failed. ESPN attributes the omission to a selection decision/opportunities for other players and expressly separates it from City speculation. Removed mental-readiness/desire insinuations, unsupported no-contact assertions, unspecified replacement links, Delap detail and the expanded Welbeck match account. Preserved the distinction between reported City interest and a completed transfer.

Direct external source URLs used or verified are listed below; these were already in the project. Full publisher text and photographs were not copied into project assets.

- Article 1: [Atalanta BC](https://en.atalanta.it/news/atalanta-ederson-the-story-continues); [Sky Sport Italia](https://sport.sky.it/calciomercato/2026/07/17/atalanta-ederson-rinnovo-calciomercato-news)
- Article 2: [Sky Sports](https://www.skysports.com/transfer/news/11670/13563271/leandro-trossard-arsenal-confirm-winger-joining-besiktas-in-17m-deal)
- Article 3: [Further reading: TV96 Live expected goals explainer](https://www.tv96live.org/articles/16)
- Article 4: [Sky Sports](https://www.skysports.com/football/news/11677/13564492/johan-manzambi-aston-villa-sign-newcastle-target-from-freiburg-in-club-record-lb59-5m-deal)
- Article 7: [Le Monde](https://www.lemonde.fr/en/sports/article/2026/07/10/mbappe-8-messi-8-france-and-argentina-stars-top-scorers-chart-at-world-cup_6755334_9.html)
- Article 8: [Atlético de Madrid](https://en.atleticodemadrid.com/noticias/unanimous-support-from-the-board-of-directors-for-the-club-s-strategy); [Sky Sports](https://www.skysports.com/football/news/11095/13577751/julian-alvarez-transfer-news-atletico-madrid-wont-sell-striker-to-barcelona-with-arsenal-the-only-option)
- Article 9: [Comparison reading: TV96 Live Champions League format explainer](https://www.tv96live.org/articles/14)
- Article 10: [Cadena SER](https://cadenaser.com/nacional/2026/08/27/julian-alvarez-con-su-futuro-en-el-aire-ha-tenido-una-reunion-de-mas-de-cinco-horas-para-decidir-que-hacer-cadena-ser/); [Sky Sports](https://www.skysports.com/football/news/11095/13577751/julian-alvarez-transfer-news-atletico-madrid-wont-sell-striker-to-barcelona-with-arsenal-the-only-option)
- Article 11: [Sky Sports](https://www.skysports.com/football/news/11095/13570597/enzo-fernandez-transfer-news-man-city-considering-bid-for-chelsea-midfielder); [ESPN](https://www.espn.com/soccer/story/_/id/49746843/xabi-alonso-chelsea-dropping-enzo-fernandez-man-city-links)

## AdSense and protected functionality

Removed exactly one AdSense loader each from `offline.html` and the unavailable `watch-live.html` page. No replacement ads or ad units were added. The Watch Live file otherwise matches its pre-cleanup contents exactly. Its analytics loader and publisher-account metadata remain unchanged; streaming stays disabled. Other publishers' ad IDs were not introduced and the global publisher ID was not changed.

Vercel configuration and `.vercelignore` match their pre-cleanup content hashes. The generator, central source model, static URL architecture and publication allowlist remain in place. Generator changes only replace the OG fallback and strip private candidate/review fields from the public metadata. Regeneration updates nine sitemap lastmod values while preserving exactly 23 articles and eight main pages.

The content validator retains exact checks for all untouched bodies and uses an explicit before/after hash manifest with reasons for the nine authorized revisions. It permits only the exact ad-loader removal on the protected Watch Live file. It still checks APIs, matches, standings, stream/player files, original analytics/AdSense loaders on substantive pages and homepage inline JavaScript. No football logic, token handling, environment variable, match ID, API integration or standings computation changed.

## Validation results

- `node .editorial/generate-static.cjs`: all 23 static article files regenerated.
- `node .editorial/validate-content.cjs`: PASS, including stale-output check and explicit source-revision checks.
- `node .editorial/image-rights-check.cjs`: PASS; all editorial body/card/OG/schema images are original or absent; candidates suppressed; no broad news citations; no utility-page ads.
- `node .editorial/raw-html-check.cjs`: PASS; all 23 HTTP 200, substantial bodies (455-885 words), unique metadata, real H1, schema, author/date/read time, related/internal links and local assets. News raw HTML exposes all 23 published IDs. Sitemap has 31 correct URLs. Drafts, unknown IDs and tested .editorial paths return 404.
- `node .editorial/browser-check.cjs`: PASS; all 23 articles, mobile/desktop, no-JavaScript article and News, all filters, pagination, navigation, theme, mock Matches and Standings, disabled Watch Live. Fallback and mobile screenshots visually inspected.
- `node .editorial/api-smoke.cjs`: PASS; safe mock tests for method/league guards, IDs/scores/logos, official standings and calculated fallback.
- `git diff --check`: PASS.

HTTP checks are local production-style tests, not a deployed Vercel preview. External services and football data are mocked in browser/API tests. Preview should repeat the live response checks before production or an AdSense review. Original brand/app assets outside the audited editorial surfaces and other legacy image files have not received a global rights clearance.

## Final working-tree diff

The following is cumulative: it includes the prior uncommitted static architecture work. In particular, the existing vercel.json diff predates this cleanup; it was not changed further. Standard git diff excludes untracked generated pages and new tools; status identifies them.

