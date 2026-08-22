// Match data is loaded automatically from /api/matches.
// These arrays stay empty until the API responds.

const matchesData = {
    shalay: [],
    maanta: [],
    berri: []
};

// Featured matches from competitions not provided by football-data.org.
const featuredMatches = [
        {
            id: 'supercup-2026-dortmund-bayern',
            home: 'Borussia Dortmund',
            away: 'Bayern Munich',
            homeScore: 0,
            awayScore: 0,
            league: 'Super Cup Final',
            status: 'Upcoming',
            statusClass: 'status-upcoming',
            overlayText: 'Watch Live',
            url: 'watch-live.html?id=supercup-2026-dortmund-bayern',
            displayTime: '21:30',
            matchDate: '2026-08-22',
            homeLogo: 'https://media.api-sports.io/football/teams/165.png',
            awayLogo: 'https://media.api-sports.io/football/teams/157.png',
            leagueLogo: 'https://media.api-sports.io/football/leagues/531.png',
            isApiMatch: false
        }
];

function applyKickoffStatus(match, day) {
    if (day !== 'maanta' || match.status !== 'Upcoming') {
        return match;
    }

    const kickoff = new Date(`${match.matchDate}T${match.displayTime}:00+03:00`);
    const elapsedMinutes = Math.floor((Date.now() - kickoff.getTime()) / 60000);

    if (!Number.isFinite(elapsedMinutes) || elapsedMinutes < 0) {
        return match;
    }

    if (elapsedMinutes < 135) {
        return { ...match, status: 'Live', statusClass: 'status-live' };
    }

    return { ...match, status: 'Finished', statusClass: 'status-finished' };
}

let matchesRequestInFlight = null;

function loadMatches() {
    if (matchesRequestInFlight) {
        return matchesRequestInFlight;
    }

    matchesRequestInFlight = fetch('/api/matches')
    .then(async response => {
        const payload = await response.json().catch(() => null);

        if (!response.ok || !payload?.matchesData) {
            throw new Error(
                payload?.error || 'Unable to load matches right now.'
            );
        }

        ['shalay', 'maanta', 'berri'].forEach(day => {
            const automaticMatches = Array.isArray(payload.matchesData[day])
                ? payload.matchesData[day].map(match => applyKickoffStatus(match, day))
                : [];
            const automaticIds = new Set(automaticMatches.map(match => String(match.id)));
            const manualMatches = featuredMatches
                .filter(match => match.matchDate === payload.dates?.[day])
                .filter(match => !automaticIds.has(String(match.id)))
                .map(match => applyKickoffStatus(match, day));

            matchesData[day].splice(
                0,
                matchesData[day].length,
                ...automaticMatches,
                ...manualMatches
            );
        });

        window.dispatchEvent(
            new CustomEvent('matchesDataUpdated', {
                detail: payload
            })
        );

        return payload;
    })
    .catch(error => {
        console.error(
            '[matches] Automatic match loading failed.',
            error
        );

        window.dispatchEvent(
            new CustomEvent('matchesDataFailed', {
                detail: {
                    message: error.message
                }
            })
        );

        return {
            matchesData,
            error: error.message
        };
    })
    .finally(() => {
        matchesRequestInFlight = null;
    });

    return matchesRequestInFlight;
}

window.matchesDataReady = loadMatches();

// Fetch fresh scores and statuses instead of only repainting old data.
setInterval(loadMatches, 60000);
