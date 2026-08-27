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
    }
];

function getPublishedArticles() {
    return articles.filter(article => article.isPublished !== false);
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
