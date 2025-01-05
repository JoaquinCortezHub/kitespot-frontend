import { useQuery } from "@tanstack/react-query";

interface WeatherMapData {
    titleUrl: string;
    coordinates: {
        lat: number;
        lon: number;
    };
    zoom: number;
    layer: string;
}

export const useWeatherMapQuery = (type: "wind" | "precipitation") => {
    return useQuery<WeatherMapData | undefined>({
        queryKey: ["weatherMap", type],
        queryFn: async () => {
            const response = await fetch(
                `http://localhost:8000/maps/${type}`
            );

            if(!response.ok) {
                throw new Error('Weather map fetch failed.');
            };

            const data = await response.json();
            return data;
        },
        enabled: !!type
    })
}