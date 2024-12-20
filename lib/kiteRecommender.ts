import convertToKnots from "./convertToKnots";

const KiteRecommender = (windSpeed: number): string => {
    const knots = convertToKnots(windSpeed);

    if(!knots) {
        throw new Error('Error receiving wind speed data.')
    }

    if(knots <= 10) {
        return "12-17"
    } else if(knots > 10 && knots <=15) {
        return "10-15"
    } else if(knots > 15 && knots <= 20) {
        return "9-13"
    } else if(knots > 20 && knots <= 30) {
        return "7-11"
    }
    return "6-10"
    
};

export default KiteRecommender;