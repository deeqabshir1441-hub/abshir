// Match data is loaded automatically from /api/matches.
// These arrays stay empty until the API responds.

const matchesData = {
    shalay: [],
    maanta: [],
    berri: []
};

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

window.matchesDataReady = fetch('/api/matches')
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

            matchesData[day].splice(
                0,
                matchesData[day].length,
                ...automaticMatches
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
    });
