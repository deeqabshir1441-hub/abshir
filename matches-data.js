// Match data is loaded automatically from /api/matches.
// These arrays stay empty until the API responds.

const matchesData = {
    shalay: [],
    maanta: [],
    berri: []
};

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
                ? payload.matchesData[day]
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