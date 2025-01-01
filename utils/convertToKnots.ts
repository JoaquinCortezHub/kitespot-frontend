const convertToKnots = (speed: number , unit: string): number => {
    if(speed === undefined || speed === null) return 0;

    switch(unit) {
        case 'mtrs/sec':
            return speed * 1.944;
        case 'km/h':
            return speed * 0.539957;
        default:
            console.warn('Unknown unit type', unit);
            return speed;
    };
};

export default convertToKnots;
