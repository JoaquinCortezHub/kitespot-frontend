interface WeatherLocation {
	name: string;
	region: string;
	country: string;
	lat: number;
	lon: number;
	tz_id: string;
	localtime: string;
};

interface CurrentWeather {
	temp_c: number;
	temp_f: number;
	wind_kph: number;
	wind_mph: number;
	wind_dir: string;
	pressure_mb: number;
	humidity: number;
	feelslike_c: number;
	feelslike_f: number;
	condition: {
		text: string;
		icon: string;
	};
	last_updated: string;
};

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
};

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
};

export interface WeatherData {
	currentWeather: {
		location: WeatherLocation;
		current: CurrentWeather;
	};
	forecast: {
		cod: string;
		message: number;
		cnt: number;
		list: ForecastItem[];
		city: ForecastCity;
	};
};
