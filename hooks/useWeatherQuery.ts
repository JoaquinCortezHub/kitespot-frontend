import { useQuery } from "@tanstack/react-query";
import { WeatherData } from "@/types/weatherData";

export const useWeatherQuery = (searchTrigger: string) => {
	return useQuery<WeatherData | null>({
		queryKey: ["weather", searchTrigger],
		queryFn: async () => {
			if (!searchTrigger) return null;

			const response = await fetch(
				`http://localhost:8000/weather?city=${encodeURIComponent(
					searchTrigger
				)}`
			);

			if (!response.ok) {
				throw new Error("Weather data fetch failed.");
			}

			const data = await response.json();

			return {
				currentWeather: data.currentWeather,
				forecast: data.forecast,
				lastUpdated: new Date().toISOString(),
			};
		},
		enabled: !!searchTrigger,
	});
};
