// interface WeatherLocation {
// 	name: string;
// 	region: string;
// 	country: string;
// 	lat: number;
// 	lon: number;
// 	tz_id: string;
// 	localtime: string;
// };

interface CurrentWeather {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
		sea_level?: number;
		grnd_level?: number;
	};
	wind: {
		speed: number;
		deg: number;
		gust?: number;
	};
	rain?: {
		"1h"?: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		country: string;
		sunrise: number;
		sunset: number;
	};
	name: string;
	cod: number;
}

interface ForecastItem {
	dt: number;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		sea_level: number;
		grnd_level: number;
		humidity: number;
		temp_kf: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	clouds: {
		all: number;
	};
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	visibility: number;
	pop: number;
	rain?: {
		"3h": number;
	};
	sys: {
		pod: string;
	};
	dt_txt: string;
}

interface ForecastCity {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface WeatherData {
	currentWeather: CurrentWeather,
	forecast: {
		cod: string;
		message: number;
		cnt: number;
		list: ForecastItem[];
		city: ForecastCity;
	};
}
