export const DegreesToCardinal = (degrees: number): string => {
    const cardinalPoints = [
        'N', 'NNE', 'NE', 'ENE', 
        'E', 'ESE', 'SE', 'SSE',
        'S', 'SSW', 'SW', 'WSW', 
        'W', 'WNW', 'NW', 'NNW'
    ];

    const normalizeDegrees = ((degrees % 360) + 360) % 360;

    const index = Math.round(normalizeDegrees / 22.5) % 16;

    return cardinalPoints[index];
}