import { useQuery } from "@tanstack/react-query";

interface WeatherMapData {
    tileUrl: string;
    coordinates: {
        lat: number;
        lon: number;
    };
    zoom: number;
    layer: string;
}

export const useWeatherMapQuery = (type: "wind" | "precipitation", city: string) => {
    return useQuery<WeatherMapData | undefined>({
        queryKey: ["weatherMap", type, city],
        queryFn: async () => {
            if(!city || city === undefined) {
                throw new Error('A city param is required to fetch weather maps.')
            };

            const response = await fetch(`http://localhost:8000/maps/${type}?city=${encodeURIComponent(city)}`);

            if(!response.ok) {
                throw new Error('Weather map fetch failed.');
            };
            
            const data = await response.json();
            console.log("Fetched map data:", data);
            return data;
        },
        enabled: !!type && !!city
    })
}