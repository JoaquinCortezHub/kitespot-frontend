import { WeatherData } from "@/types/weatherData";

interface DayForecast {
	date: string;
	averageTemp: number;
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

	return Object.entries(groupedData).map(([date, items]) => ({
		date,
		averageTemp:
			items.reduce((sum, item) => sum + (item.main.temp - 273.15), 0) /
			items.length,
		averageWind:
			items.reduce((sum, item) => sum + item.wind.speed, 0) / items.length,
		maxGust: Math.max(...items.map((item) => item.wind.gust)),
		weatherIcon: items[Math.floor(items.length / 2)].weather[0].icon,
		weatherDescription:
			items[Math.floor(items.length / 2)].weather[0].description,
		hourlyData: items,
	}));
};
