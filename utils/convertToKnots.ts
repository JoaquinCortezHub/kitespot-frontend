const convertToKnots = (speed: number): number => {
    const knots = speed * 0.539957;
    return knots;
};

export default convertToKnots;
