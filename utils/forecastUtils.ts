import { WeatherData } from "@/types/weatherData";
import convertToKnots from "./convertToKnots";

interface DayForecast {
	date: string;
	maxTemp: number;
	minTemp: number;
	averageWind: number;
	maxGust: number;
	weatherIcon: string;
	weatherDescription: string;
	hourlyData: WeatherData["forecast"]["list"];
}

export const groupForecastByDay = (
	forecastList: WeatherData["forecast"]["list"]
): DayForecast[] => {
	const groupedData: { [key: string]: WeatherData["forecast"]["list"] } = {};

	forecastList.forEach((item) => {
		const date = item.dt_txt.split(" ")[0];
		if (!groupedData[date]) {
			groupedData[date] = [];
		}
		groupedData[date].push(item);
	});

	return Object.entries(groupedData).map(([date, items]) => {
		const windSpeedInKnots = items.map(item => 
			convertToKnots(item.wind.speed || 0, 'mtrs/sec')
		);
		const gustInKnots = items.map(item => 
			item.wind.gust ? convertToKnots(item.wind.gust, 'mtrs/sec') : 0
		);
		return {
			date,
			maxTemp: Math.max(...items.map((item) => item.main.temp)),
			minTemp: Math.min(...items.map((item) => item.main.temp)),
			averageWind:
				Math.round(windSpeedInKnots.reduce((sum, speed) => sum + speed, 0) / items.length),
			maxGust: Math.round(Math.max(...gustInKnots)),
			weatherIcon: items[Math.floor(items.length / 2)].weather[0].icon,
			weatherDescription:
				items[Math.floor(items.length / 2)].weather[0].description,
			hourlyData: items,
		};
	});
};
