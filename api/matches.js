const competitionCodes = ["PL", "PD", "SA", "BL1", "FL1", "CL"];

const competitionNames = {
    PL: "Premier League",
    PD: "La Liga",
    SA: "Serie A",
    BL1: "Bundesliga",
    FL1: "Ligue 1",
    CL: "UEFA Champions League"
};

const matchFilterConfig = {
    PL: { showAll: true },
    PD: { teams: ["real madrid", "barcelona", "atletico madrid"] },
    SA: { teams: ["ac milan", "inter", "juventus", "napoli", "roma"] },
    BL1: { teams: ["bayern munich", "borussia dortmund"] },
    FL1: { teams: ["paris saint germain"] },
    CL: { showAll: true }
};

// Exact aliases for football-data.org naming variants. Matching is normalized
// then compared by key, never by broad substring.
const teamAliases = {
    "real madrid": "real madrid",
    "fc barcelona": "barcelona",
    "barcelona": "barcelona",
    "atletico madrid": "atletico madrid",
    "atletico de madrid": "atletico madrid",
    "club atletico de madrid": "atletico madrid",
    "ac milan": "ac milan",
    "milan": "ac milan",
    "inter": "inter",
    "inter milan": "inter",
    "fc internazionale milano": "inter",
    "internazionale milano": "inter",
    "juventus": "juventus",
    "napoli": "napoli",
    "ssc napoli": "napoli",
    "roma": "roma",
    "as roma": "roma",
    "bayern munich": "bayern munich",
    "bayern munchen": "bayern munich",
    "fc bayern munchen": "bayern munich",
    "borussia dortmund": "borussia dortmund",
    "psg": "paris saint germain",
    "paris saint germain": "paris saint germain",
    "paris saint germain fc": "paris saint germain"
};

// Mark a football-data.org match ID as featured to show it even when it does
// not meet the automatic competition filter. Public stream sources belong in
// streams.js, which is loaded only by the single watch-live page.
const matchOverrides = {
    // "123456": { featured: true }
};

const NAIROBI_TIMEZONE = "Africa/Nairobi";
const CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=600";
const upstreamMatchCache = new Map();

function sendJson(res, status, body) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(status).json(body);
}

function competitionCacheKey(code, dates) {
    return `${code}:${dates.yesterday}:${dates.tomorrow}`;
}

function getCachedCompetition(code, dates) {
    return upstreamMatchCache.get(competitionCacheKey(code, dates)) || null;
}

function cacheCompetition(code, dates, matches) {
    upstreamMatchCache.set(competitionCacheKey(code, dates), { matches });
}

function getNairobiParts(date) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: NAIROBI_TIMEZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(date);

    return Object.fromEntries(
        parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value])
    );
}

function formatNairobiDate(date) {
    const parts = getNairobiParts(date);
    return `${parts.year}-${parts.month}-${parts.day}`;
}

function getNairobiDateRange() {
    const todayParts = getNairobiParts(new Date());
    const today = new Date(Date.UTC(
        Number(todayParts.year),
        Number(todayParts.month) - 1,
        Number(todayParts.day)
    ));

    const formatUtcDate = (date) => date.toISOString().slice(0, 10);

    return {
        yesterday: formatUtcDate(new Date(today.getTime() - 86400000)),
        today: formatUtcDate(today),
        tomorrow: formatUtcDate(new Date(today.getTime() + 86400000))
    };
}

function formatNairobiTime(utcDate) {
    return new Intl.DateTimeFormat("en-GB", {
        timeZone: NAIROBI_TIMEZONE,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(new Date(utcDate));
}

function statusDetails(apiStatus, utcDate, now = new Date()) {
    if (["IN_PLAY", "PAUSED"].includes(apiStatus)) {
        return { status: "Live", statusClass: "status-live" };
    }

    if (["FINISHED", "AWARDED"].includes(apiStatus)) {
        return { status: "Finished", statusClass: "status-finished" };
    }

    if (["POSTPONED", "SUSPENDED"].includes(apiStatus)) {
        return { status: "Postponed", statusClass: "status-upcoming" };
    }

    if (["CANCELLED", "CANCELED"].includes(apiStatus)) {
        return { status: "Cancelled", statusClass: "status-upcoming" };
    }

    // The upstream API can be rate-limited and leave a cached SCHEDULED/TIMED
    // status in place after kickoff. Use the kickoff time as a conservative
    // fallback, while still respecting explicit live/final/postponed statuses.
    if (["SCHEDULED", "TIMED"].includes(apiStatus)) {
        const kickoff = new Date(utcDate);
        const elapsedMinutes = Math.floor((now.getTime() - kickoff.getTime()) / 60000);

        if (Number.isFinite(elapsedMinutes) && elapsedMinutes >= 0 && elapsedMinutes < 135) {
            return { status: "Live", statusClass: "status-live" };
        }

        if (Number.isFinite(elapsedMinutes) && elapsedMinutes >= 135) {
            return { status: "Finished", statusClass: "status-finished" };
        }
    }

    return { status: "Upcoming", statusClass: "status-upcoming" };
}

function normalizeTeamName(name) {
    return String(name || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function getTeamKeys(team) {
    return [team?.name, team?.shortName]
        .filter(Boolean)
        .map(normalizeTeamName)
        .map((name) => teamAliases[name] || name);
}

function matchesCompetitionFilter(match, competitionCode) {
    const filter = matchFilterConfig[competitionCode];

    if (!filter) {
        return false;
    }

    if (filter.showAll) {
        return true;
    }

    const allowedTeams = new Set(filter.teams);
    return [...getTeamKeys(match.homeTeam), ...getTeamKeys(match.awayTeam)]
        .some((team) => allowedTeams.has(team));
}

function normalizeMatch(match, competitionCode) {
    const override = matchOverrides[String(match.id)] || {};
    const homeTeam = match.homeTeam || {};
    const awayTeam = match.awayTeam || {};
    const homeScore = match.score?.fullTime?.home ?? match.score?.halfTime?.home ?? 0;
    const awayScore = match.score?.fullTime?.away ?? match.score?.halfTime?.away ?? 0;
    const apiStatus = statusDetails(match.status, match.utcDate);
    const matchDate = formatNairobiDate(new Date(match.utcDate));

    return {
        home: homeTeam.shortName || homeTeam.name || "Home team",
        away: awayTeam.shortName || awayTeam.name || "Away team",
        homeScore,
        awayScore,
        league: competitionNames[competitionCode],
        status: apiStatus.status,
        statusClass: apiStatus.statusClass,
        overlayText: "Watch Live",
        url: `watch-live.html?id=${encodeURIComponent(match.id)}`,
        displayTime: formatNairobiTime(match.utcDate),
        matchDate,
        id: String(match.id),
        homeLogo: homeTeam.crest || null,
        awayLogo: awayTeam.crest || null,
        leagueLogo: match.competition?.emblem || null,
        isApiMatch: true,
        featured: Boolean(override.featured),
        shouldDisplay: Boolean(override.featured) || matchesCompetitionFilter(match, competitionCode)
    };
}

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return sendJson(res, 405, { error: "Method not allowed" });
    }

    if (!process.env.FOOTBALL_DATA_TOKEN) {
        console.error("[api/matches] FOOTBALL_DATA_TOKEN is not configured");
        return sendJson(res, 500, { error: "FOOTBALL_DATA_TOKEN is not configured" });
    }

    const dates = getNairobiDateRange();

    try {
        const results = await Promise.all(competitionCodes.map(async (code) => {
            const endpoint = new URL(`https://api.football-data.org/v4/competitions/${code}/matches`);
            endpoint.searchParams.set("dateFrom", dates.yesterday);
            endpoint.searchParams.set("dateTo", dates.tomorrow);

            try {
                const response = await fetch(endpoint, {
                    headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_TOKEN }
                });
                const data = await response.json().catch(() => null);

                if (!response.ok) {
                    console.error("[api/matches] Competition request failed", {
                        code,
                        status: response.status,
                        message: data?.message
                    });

                    if (response.status === 429) {
                        const cachedCompetition = getCachedCompetition(code, dates);

                        if (cachedCompetition) {
                            return {
                                code,
                                matches: cachedCompetition.matches,
                                unavailable: true,
                                cached: true,
                                status: 429,
                                reason: "rate_limit"
                            };
                        }

                        return {
                            code,
                            matches: [],
                            unavailable: true,
                            status: 429,
                            reason: "rate_limit"
                        };
                    }

                    return {
                        code,
                        matches: [],
                        unavailable: true,
                        status: response.status,
                        reason: "upstream_error"
                    };
                }

                const matches = Array.isArray(data?.matches) ? data.matches : [];
                cacheCompetition(code, dates, matches);
                return { code, matches, unavailable: false };
            } catch (error) {
                console.error("[api/matches] Competition network error", { code, message: error.message });
                return {
                    code,
                    matches: [],
                    unavailable: true,
                    status: 0,
                    reason: "network_error"
                };
            }
        }));

        const matchesData = { shalay: [], maanta: [], berri: [] };
        const dateKeys = {
            [dates.yesterday]: "shalay",
            [dates.today]: "maanta",
            [dates.tomorrow]: "berri"
        };

        if (results.every((result) => result.unavailable && !result.cached)) {
            console.error("[api/matches] All competition requests were unavailable");
            return sendJson(res, 502, {
                error: "Unable to load matches right now"
            });
        }

        results.forEach(({ code, matches }) => {
            matches
                .map((match) => normalizeMatch(match, code))
                .filter((match) => match.shouldDisplay)
                .forEach((match) => {
                    const day = dateKeys[match.matchDate];
                    if (day) {
                        delete match.shouldDisplay;
                        delete match.featured;
                        matchesData[day].push(match);
                    }
                });
        });

        Object.values(matchesData).forEach((matches) => {
            matches.sort((a, b) => a.displayTime.localeCompare(b.displayTime));
        });

        const availableCompetitions = results
            .filter((result) => !result.unavailable)
            .map((result) => result.code);
        const unavailableCompetitions = results
            .filter((result) => result.unavailable)
            .map((result) => ({
                code: result.code,
                status: result.status,
                reason: result.reason || "upstream_error",
                cached: Boolean(result.cached)
            }));

        res.setHeader("Cache-Control", CACHE_CONTROL);
        return sendJson(res, 200, {
            matchesData,
            availableCompetitions,
            unavailableCompetitions,
            dates: {
                shalay: dates.yesterday,
                maanta: dates.today,
                berri: dates.tomorrow
            }
        });
    } catch (error) {
        console.error("[api/matches] Server error", { message: error.message });
        return sendJson(res, 502, { error: "Unable to load matches right now" });
    }
}
