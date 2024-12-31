const convertToKnots = (speed: number, unit: string): number => {
    if(unit === 'mtrs/sec') {
        const knots = speed * 1.944;
        return knots;
    }

    const knots = speed * 0.539957;
    return knots;
};

export default convertToKnots;
