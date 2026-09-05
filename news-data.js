const articles = [
    {
        id: 1,
        title: "Atalanta confirm Éderson contract extension through 2031",
        description: "Atalanta have confirmed that midfielder Éderson signed a contract extension running through June 2031.",
        image: "",
        imageCandidate: "news image/1.jpg",
        category: "Serie A",
        articleType: "News summary",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "Atalanta BC",
        sourceUrl: "https://en.atalanta.it/news/atalanta-ederson-the-story-continues",
        sources: [
            { name: "Atalanta BC", url: "https://en.atalanta.it/news/atalanta-ederson-the-story-continues" },
            { name: "Sky Sport Italia", url: "https://sport.sky.it/calciomercato/2026/07/17/atalanta-ederson-rinnovo-calciomercato-news" }
        ],
        imageCredit: "",
        sourceReviewRequired: false,
        imageReviewRequired: true,
        isPublished: true
    },
    {
        id: 2,
        title: "Trossard leaves Arsenal as club considers left-wing options",
        description: "Leandro Trossard joined Beşiktaş while Arsenal considered changes on the left, including reported interest in Christos Tzolis and Morgan Rogers.",
        image: "",
        imageCandidate: "news image/2.jpeg",
        category: "Premier League",
        articleType: "Transfer news summary",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "Sky Sports",
        sourceUrl: "https://www.skysports.com/transfer/news/11670/13563271/leandro-trossard-arsenal-confirm-winger-joining-besiktas-in-17m-deal",
        sources: [{ name: "Sky Sports", url: "https://www.skysports.com/transfer/news/11670/13563271/leandro-trossard-arsenal-confirm-winger-joining-besiktas-in-17m-deal" }],
        imageCredit: "",
        sourceReviewRequired: false,
        imageReviewRequired: true,
        isPublished: true
    },
    {
        id: 3,
        title: "FIFA records Messi with 10 World Cup knockout-stage assists",
        description: "FIFA's tournament record summary lists Lionel Messi with 10 assists in World Cup knockout matches, the most on record.",
        image: "",
        imageCandidate: "news image/3.jpg",
        category: "FIFA World Cup",
        articleType: "Statistics summary",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "FIFA",
        sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/lionel-messi-argentina-stats-records",
        sources: [{ name: "FIFA", url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/lionel-messi-argentina-stats-records" }],
        imageCredit: "",
        sourceReviewRequired: false,
        imageReviewRequired: true,
        isPublished: true
    },
    {
        id: 4,
        title: "Johan Manzambi completes move to Aston Villa",
        description: "Johan Manzambi completed a move from Freiburg to Aston Villa after Newcastle had also pursued the Switzerland midfielder.",
        image: "",
        imageCandidate: "news image/4.jpg",
        category: "Transfers",
        articleType: "Transfer news summary",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "Premier League",
        sourceUrl: "https://www.premierleague.com/en/news/4680006/manzambi-checks-in-at-bodymoor-heath",
        sources: [
            { name: "Premier League", url: "https://www.premierleague.com/en/news/4680006/manzambi-checks-in-at-bodymoor-heath" },
            { name: "Sky Sports", url: "https://www.skysports.com/football/news/11677/13564492/johan-manzambi-aston-villa-sign-newcastle-target-from-freiburg-in-club-record-lb59-5m-deal" }
        ],
        imageCredit: "",
        sourceReviewRequired: false,
        imageReviewRequired: true,
        isPublished: true
    },
    {
        id: 5,
        title: "Romelu Lukaku explains reported 2010 Real Madrid decision",
        description: "Romelu Lukaku reportedly said his family prioritised his education when the possibility of joining Real Madrid arose in 2010.",
        image: "",
        imageCandidate: "news image/5.jpg",
        category: "Football News",
        articleType: "News summary",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "",
        sourceUrl: "",
        imageCredit: "",
        sourceReviewRequired: true,
        imageReviewRequired: true,
        isPublished: false
    },
    {
        id: 6,
        title: "Alexander Sørloth social-media reaction report",
        description: "This item requires a fuller verified source and additional reporting before publication.",
        image: "",
        imageCandidate: "news image/6.webp",
        category: "FIFA World Cup",
        articleType: "Unpublished draft",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "",
        sourceUrl: "",
        imageCredit: "",
        sourceReviewRequired: true,
        imageReviewRequired: true,
        isPublished: false
    },
    {
        id: 7,
        title: "Mbappé reaches 11 goal contributions at 2026 World Cup",
        description: "Kylian Mbappé reached eight goals and three assists by the 2026 World Cup quarter-final stage, according to Le Monde.",
        image: "",
        imageCandidate: "news image/7.webp",
        category: "FIFA World Cup",
        articleType: "Statistics summary",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-07-14T12:02:02+03:00",
        updatedAt: "2026-08-28",
        sourceName: "Le Monde",
        sourceUrl: "https://www.lemonde.fr/en/sports/article/2026/07/10/mbappe-8-messi-8-france-and-argentina-stars-top-scorers-chart-at-world-cup_6755334_9.html",
        sources: [{ name: "Le Monde", url: "https://www.lemonde.fr/en/sports/article/2026/07/10/mbappe-8-messi-8-france-and-argentina-stars-top-scorers-chart-at-world-cup_6755334_9.html" }],
        imageCredit: "",
        sourceReviewRequired: false,
        imageReviewRequired: true,
        isPublished: true
    },
    {
        id: 8,
        title: "Arsenal Transfer Latest: Julián Álvarez Door Opens as Gabriel Martinelli Exit Talks Progress",
        description: "Arsenal remain interested in Julián Álvarez as Atlético Madrid shut the door on Barcelona talks, while Gabriel Martinelli's future is also under discussion.",
        category: "Premier League",
        articleType: "Transfer News",
        author: "TV96 Live Editorial Team",
        publishedAt: "2026-08-28T14:40:00+03:00",
        updatedAt: "2026-08-28",
        image: "news image/8.png",
        imageAlt: "Arsenal transfer latest featuring Julian Alvarez and Gabriel Martinelli",
        imageReviewRequired: false,
        isPublished: true,
        sources: [
            {
                name: "Atlético de Madrid",
                url: "https://en.atleticodemadrid.com/noticias/unanimous-support-from-the-board-of-directors-for-the-club-s-strategy"
            },
            {
                name: "Sky Sports",
                url: "https://www.skysports.com/"
            }
        ]
    },
    {
        id: 9,

        title: "Europa League Draw 2026/27: Sunderland Face AC Milan as Bournemouth, Celtic and Crystal Palace Learn Opponents",

        description: "Sunderland will travel to San Siro to face AC Milan, while Bournemouth will host the Serie A giants as British clubs discovered their Europa League and Conference League opponents.",

        category: "Europa League",
        articleType: "Draw News",

        author: "TV96 Live Editorial Team",

        publishedAt: "2026-08-28T15:00:00+03:00",
        updatedAt: "2026-08-28",

        image: "/news image/9.png",
        imageAlt: "Europa League 2026/27 draw featuring Sunderland, AC Milan, Bournemouth, Celtic and Crystal Palace",

        imageReviewRequired: false,
        isPublished: true,

        sources: [
            {
                name: "UEFA",
                url: "https://www.uefa.com/uefaeuropaleague/"
            },
            {
                name: "Sky Sports",
                url: "https://www.skysports.com/football"
            }
        ]
    },
    {
        id: 10,

        title: "Julián Álvarez Holds Five-Hour Transfer Meeting as Arsenal Option Gains Momentum",

        description: "Julián Álvarez and his representatives reportedly held a late-night meeting lasting more than five hours as the Atlético Madrid striker weighs up whether to stay in Spain or consider a move to Arsenal.",

        category: "Premier League",
        articleType: "Transfer News",

        author: "TV96 Live Editorial Team",

        publishedAt: "2026-08-28T15:30:00+03:00",
        updatedAt: "2026-08-28",

        image: "/news image/10.png",
        imageAlt: "Julian Alvarez transfer latest amid Arsenal and Atletico Madrid speculation",

        imageReviewRequired: false,
        isPublished: true,

        sources: [
            {
                name: "Cadena SER",
                url: "https://cadenaser.com/nacional/2026/08/27/julian-alvarez-con-su-futuro-en-el-aire-ha-tenido-una-reunion-de-mas-de-cinco-horas-para-decidir-que-hacer-cadena-ser/"
            },
            {
                name: "Sky Sports",
                url: "https://www.skysports.com/football/news/11095/13577751/julian-alvarez-transfer-news-atletico-madrid-wont-sell-striker-to-barcelona-with-arsenal-the-only-option"
            }
        ]
    },
    {
        id: 11,

        title: "Xabi Alonso Explains Enzo Fernández Omission as Manchester City Transfer Interest Grows",

        description: "Xabi Alonso has explained why Enzo Fernández was left out of Chelsea's squad against Luton as Manchester City continue to consider a move for the Argentine midfielder.",

        category: "Premier League",
        articleType: "Transfer News",

        author: "TV96 Live Editorial Team",

        publishedAt: "2026-08-28T16:00:00+03:00",
        updatedAt: "2026-08-28",

        image: "/news image/11.png",
        imageAlt: "Enzo Fernandez and Xabi Alonso amid Manchester City transfer speculation",

        imageReviewRequired: false,
        isPublished: true,

        sources: [
            {
                name: "Sky Sports",
                url: "https://www.skysports.com/football/news/11095/13570597/enzo-fernandez-transfer-news-man-city-considering-bid-for-chelsea-midfielder"
            },
            {
                name: "ESPN",
                url: "https://www.espn.com/soccer/story/_/id/49746843/xabi-alonso-chelsea-dropping-enzo-fernandez-man-city-links"
            }
        ]
    }
];

// Evergreen metadata stays here; trusted body HTML is in article-content.js.
// Run node .editorial/sync-content.cjs after an editorial change.
const guideSources = {
    premier: { name: "Premier League: competition explained", url: "https://www.premierleague.com/en/premier-league-explained" },
    europe: { name: "Premier League: European qualification routes", url: "https://www.premierleague.com/en/news/373663" },
    relegation: { name: "Premier League: relegation and tiebreakers", url: "https://www.premierleague.com/en/news/4657245/202526-premier-league-relegation-faq" },
    promotion: { name: "EFL: Championship play-off format change", url: "https://www.efl.com/news/2026/march/05/efl-statement--sky-bet-championship-play-off-format/" },
    uefa: { name: "UEFA: Champions League format and access", url: "https://www.uefa.com/news-media/news/0268-12157d69ce2d-9f011c70f6fa-1000--how-clubs-qualify-for-europe/" },
    regulations: { name: "UEFA: 2026/27 Champions League regulations", url: "https://documents.uefa.com/r/Regulations-of-the-UEFA-Champions-League-2026/27/G.1-Introduction-Online" },
    performance: { name: "UEFA: European Performance Spots", url: "https://www.uefa.com/uefachampionsleague/news/02a2-1fdbe9a25733-8d37ff5f9226-1000--202627-uefa-champions-league-which-teams-are-in-the-european-performance-spots-as-it-stands/" },
    xg: { name: "Hudl Statsbomb: expected goals methodology", url: "https://statsbomb.com/soccer-metrics/expected-goals-xg-explained/" },
    var: { name: "IFAB: VAR protocol (2026/27)", url: "https://www.theifab.com/laws/latest/video-assistant-referee-var-protocol/" },
    laws: { name: "IFAB: latest law changes", url: "https://theifab.com/law-changes/latest/" },
    spain: { name: "LALIGA: official standings and competition information", url: "https://www.laliga.com/en-GB/laliga-easports/standing" },
    spainRules: { name: "LALIGA: regulations directory", url: "https://www.laliga.com/es-NL/transparencia/normativa" },
    italy: { name: "Lega Serie A: relegation play-off context", url: "https://en.legaseriea.it/serie-a/news/the-final-reckoning-lecce-and-cremonese-face-a-decisive-final-day" },
    italyHistory: { name: "Lega Serie A: the first unified championship", url: "https://www.legaseriea.it/serie-a/news/96-anni-fa-l-inter-vinceva-il-primo-scudetto-a-girone-unico" },
    germany: { name: "Bundesliga: promotion and relegation", url: "https://www.bundesliga.com/en/bundesliga/news/how-does-promotion-and-relegation-work-in-the-bundesliga-10645" },
    germanyGuide: { name: "Bundesliga: competition FAQ", url: "https://www.bundesliga.com/en/faq/10-things-on-the-bundesliga" },
    france: { name: "Ligue 1: survival and relegation positions", url: "https://ligue1.com/en/articles/l1_article_93-" },
    francePlayoffs: { name: "Ligue 1: the Ligue 2 play-off route", url: "https://ligue1.com/en/articles/l1_article_5074-" }
};

const guideDefinitions = [
    [12, "How the Premier League Works: Complete Guide", "Understand the Premier League's 20-team season, points, table, tiebreakers, title, relegation and European routes with worked examples.", "Premier League", "Football Guides", [20, 15, 18], ["premier", "relegation", "europe"]],
    [13, "How Champions League Qualification Works", "Separate domestic league places, qualifying rounds, European Performance Spots and title-holder routes into the Champions League.", "Champions League", "Football Guides", [14, 25, 19], ["uefa", "regulations", "performance"]],
    [14, "Champions League Format Explained", "A practical guide to the 36-team league phase, eight fixtures, top-eight race, knockout play-offs, aggregate scores and final.", "Champions League", "Football Guides", [13, 25, 19], ["uefa", "regulations"]],
    [15, "What Is Goal Difference in Football?", "Learn GF, GA and GD with positive and negative examples, table comparisons, two-team swings and competition-specific tiebreaking cautions.", "Football Guides", "Football Guides", [20, 18, 12], ["premier", "relegation", "spainRules"]],
    [16, "What Is Expected Goals (xG)?", "Understand shot quality, match xG totals, differences between providers and the limits of using expected goals to assess a performance.", "Football Guides", "Football Guides", [15, 20, 25], ["xg"]],
    [17, "How VAR Works in Football", "Understand checks, reviews and referee decisions, including the 2026/27 second-yellow changes and optional immediate corner corrections.", "Football Guides", "Football Guides", [16, 12, 25], ["var", "laws"]],
    [18, "Premier League Relegation Explained", "How the bottom three go down, Championship promotion works and survival calculations depend on points, tiebreakers and remaining fixtures.", "Premier League", "Football Guides", [12, 15, 20], ["relegation", "premier", "promotion"]],
    [19, "How European Qualification Works in the Premier League", "Follow England's European places through league finishes, domestic cups, additional performance spots and overlapping title-holder routes.", "Premier League", "Football Guides", [13, 14, 20], ["europe", "performance", "regulations"]],
    [20, "Premier League Guide", "Follow the Premier League week by week: read form, assess the schedule and connect title, European and survival races with match performances.", "Premier League", "League & Competition Guides", [12, 18, 19], ["premier", "europe"]],
    [21, "La Liga Guide", "Follow Spain's top flight with its season structure, head-to-head ranking context, European routes and practical tactical viewing questions.", "La Liga", "League & Competition Guides", [15, 13, 23], ["spain", "spainRules"]],
    [22, "Serie A Guide", "A guide to Italy's league season, decisive tied-position play-offs, European routes and reading the tactical contest beyond formation graphics.", "Serie A", "League & Competition Guides", [15, 13, 16], ["italy", "italyHistory"]],
    [23, "Bundesliga Guide", "Understand Germany's 18-team league, 34-match schedule, relegation play-off and the different boundaries at the bottom of the table.", "Bundesliga", "League & Competition Guides", [24, 15, 13], ["germany", "germanyGuide"]],
    [24, "Ligue 1 Guide", "Explore Ligue 1's 18-club season, European qualification, Ligue 2 play-off route and a practical approach to following French football.", "Ligue 1", "League & Competition Guides", [23, 13, 15], ["france", "francePlayoffs"]],
    [25, "UEFA Champions League Guide", "Follow European matchups, league-phase objectives and two-leg tactics while keeping match scores, aggregate situations and analysis distinct.", "Champions League", "League & Competition Guides", [14, 13, 19], ["uefa", "regulations"]]
];

articles.push(...guideDefinitions.map(([id, title, description, category, section, relatedIds, sourceKeys]) => ({
    id, title, description, category, section, relatedIds,
    articleType: "Evergreen guide",
    author: "TV96 Live Editorial Team",
    publishedAt: "2026-09-05T12:00:00+03:00",
    image: "",
    sources: sourceKeys.map(key => guideSources[key]),
    isPublished: true
})));

// These records reserve IDs only. Draft briefs live in .editorial/season-drafts.md.
// No factual season claims or unfinished bodies are sent to public article views.
articles.push(...["Manchester United", "Arsenal", "Liverpool", "Manchester City", "Real Madrid", "Barcelona"].map((club, index) => ({
    id: 26 + index,
    title: `${club} 2026/27 Season Guide`,
    category: "Team Guides",
    section: "Team Guides / Analysis",
    articleType: "Unpublished draft",
    isPublished: false,
    sourceReviewRequired: true
})));

function getPublishedArticles() {
    return articles.filter(article => article.isPublished === true);
}

function getRelatedArticles(article, limit = 3) {
    const published = getPublishedArticles().filter(item => item.id !== article.id);
    const explicit = (article.relatedIds || []).map(id => published.find(item => item.id === id)).filter(Boolean);
    const contextual = published.filter(item => item.category === article.category);
    const guides = published.filter(item => item.section);
    return [...new Map([...explicit, ...contextual, ...guides, ...published].map(item => [item.id, item])).values()].slice(0, limit);
}

function escapeArticleText(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[character]);
}

function getArticleReadingTime(article) {
    return `${Math.max(1, Math.ceil((article.wordCount || 0) / 220))} min read`;
}

function getFeaturedArticles(limit = 4) {
    const published = getPublishedArticles();
    return [12, 14, 16, 20].map(id => published.find(article => article.id === id)).filter(Boolean).slice(0, limit);
}

function renderArticleSummary(article) {
    return `<article class="editorial-summary">
        <span class="editorial-category">${escapeArticleText(article.category)}</span>
        <h3><a href="/articles/${article.id}">${escapeArticleText(article.title)}</a></h3>
        <p>${escapeArticleText(article.description)}</p>
        <p class="editorial-meta"><time datetime="${escapeArticleText(article.publishedAt)}">${formatArticleDate(article.publishedAt)}</time> · ${getArticleReadingTime(article)}</p>
    </article>`;
}

function formatArticleDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(date);
}

// BEGIN GENERATED WORD COUNTS
const articleWordCounts = {
    "1": 499,
    "2": 500,
    "3": 514,
    "4": 512,
    "7": 512,
    "8": 502,
    "9": 938,
    "10": 860,
    "11": 786,
    "12": 792,
    "13": 804,
    "14": 810,
    "15": 782,
    "16": 823,
    "17": 839,
    "18": 854,
    "19": 885,
    "20": 802,
    "21": 834,
    "22": 839,
    "23": 814,
    "24": 843,
    "25": 840
};
articles.forEach(article => { article.wordCount = articleWordCounts[article.id] || 0; });
// END GENERATED WORD COUNTS
