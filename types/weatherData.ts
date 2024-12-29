interface WeatherLocation {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
}

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
}

interface ForecastDay {
    dt: number;
    temp: {
        day: number;
        min: number;
        max: number;
    };
    wind_speed: number;
    weather: {
        description: string;
        icon: string;
    }[];
}

export interface WeatherData {
    currentWeather: {
        location: WeatherLocation;
        current: CurrentWeather;
    };
    forecast: ForecastDay[];
}
