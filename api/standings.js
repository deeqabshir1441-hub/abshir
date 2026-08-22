const ALLOWED_LEAGUES = new Set(["PL", "PD", "SA", "BL1", "FL1", "CL"]);
const CACHE_CONTROL = "s-maxage=120, stale-while-revalidate=300";

function sendJson(res, status, body) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(status).json(body);
}

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return sendJson(res, 405, { error: "Method not allowed" });
    }

    const league = typeof req.query.league === "string"
        ? req.query.league.toUpperCase()
        : "PL";

    if (!ALLOWED_LEAGUES.has(league)) {
        return sendJson(res, 400, { error: "Unsupported league" });
    }

    if (!process.env.FOOTBALL_DATA_TOKEN) {
        console.error("[api/standings] FOOTBALL_DATA_TOKEN is not configured");
        return sendJson(res, 500, {
            error: "FOOTBALL_DATA_TOKEN is not configured"
        });
    }

    try {
        const response = await fetch(
            `https://api.football-data.org/v4/competitions/${league}/standings`,
            {
                headers: {
                    "X-Auth-Token": process.env.FOOTBALL_DATA_TOKEN
                }
            }
        );

        let data = null;
        try {
            data = await response.json();
        } catch (parseError) {
            console.error("[api/standings] Invalid JSON from football-data.org", {
                league,
                status: response.status,
                message: parseError.message
            });
        }

        if (!response.ok) {
            console.error("[api/standings] Football-data API request failed", {
                league,
                status: response.status,
                message: data?.message
            });
            return sendJson(res, response.status, {
                error: "Football-data API request failed",
                status: response.status
            });
        }

        const totalStanding = data?.standings?.find(
            (standing) => standing.type === "TOTAL"
        );

        if (!Array.isArray(totalStanding?.table)) {
            console.error("[api/standings] TOTAL standings table is missing", { league });
            return sendJson(res, 502, {
                error: "Football-data API returned no TOTAL standings table"
            });
        }

        const standings = totalStanding.table.map((entry) => ({
            position: entry.position,
            name: entry.team?.shortName || entry.team?.name || "Unknown team",
            logo: entry.team?.crest || null,
            played: entry.playedGames,
            win: entry.won,
            draw: entry.draw,
            lose: entry.lost,
            goalsFor: entry.goalsFor,
            goalsAgainst: entry.goalsAgainst,
            goalDifference: entry.goalDifference,
            points: entry.points,
            form: entry.form || ""
        }));

        res.setHeader("Cache-Control", CACHE_CONTROL);
        return sendJson(res, 200, {
            competition: {
                name: data.competition?.name || league,
                emblem: data.competition?.emblem || null
            },
            season: data.season ? {
                startDate: data.season.startDate,
                endDate: data.season.endDate
            } : null,
            standings
        });
    } catch (error) {
        console.error("[api/standings] Network or server error", {
            league,
            message: error.message
        });
        return sendJson(res, 502, {
            error: "Unable to reach football-data.org"
        });
    }
}
