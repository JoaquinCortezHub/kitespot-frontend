import { WeatherData } from "@/types/weatherData";
import React from "react";
import { format } from "date-fns";

import { Compass, Sailboat, Triangle, Wind } from "lucide-react";
import InfoCard from "./info-card-number";
import InfoCardString from "./info-card-string";
import InfoCardToolTip from "./info-card-tooltip";
import KiteRecommender from "@/utils/kiteRecommender";
import ImageBanner from "./image-banner";
import ForecastDisplay from "./forecastDisplay";
import convertToKnots from "@/utils/convertToKnots";
import { DegreesToCardinal } from "@/utils/windConverter";
import { useWeatherMapQuery } from "@/hooks/useMapQuery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import WeatherMap from "./weather-map";
import Image from "next/image";

type WeatherDisplayProps = {
	weather: WeatherData,
	image: {
		imageUrl: string;
		author: {
			firstName: string;
			lastName: string;
		}
	}
};

export default function DataDisplay({ weather, image }: WeatherDisplayProps) {
	const {currentWeather, forecast, lastUpdated} = weather;
	const formattedLastUpdated = lastUpdated ? format(new Date(lastUpdated), "HH:mm") : "N/A";
	const city = currentWeather.name;
	const fallBackImage = {
		imageUrl: "https://via.placeholder.com/800x350?text=No+Image+Available",
		author: { firstName: "Unknown", lastName: "" }
	};

	const safeImage = image?.imageUrl ? image : fallBackImage;
	
	const { data: windMap, isLoading: windLoading } = useWeatherMapQuery("wind", city);
	const { data: precipitationMap, isLoading: precipitationLoading } = useWeatherMapQuery("precipitation", city);
	return (
		<div className="mx-auto">
			<div className="flex flex-col mb-16">
				<ImageBanner imageUrl={safeImage.imageUrl} author={safeImage.author} />
				<div className="flex items-center justify-start gap-2">
					<h1 className="text-2xl md:text-3xl font-bold">
						{currentWeather.name}, {currentWeather.sys.country}
					</h1>
					<img
						src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
						alt={currentWeather.weather[0].description}
					/>
				</div>
				<div>
					<p className="text-slate-500 font-medium -mt-2">
						Última actualización: {formattedLastUpdated}
					</p>
				</div>
				<div className="mt-4 text-xl md:text-2xl font-bold text-slate-600">
					<h4 className="mb-1">Hoy</h4>
				</div>
					<hr className="stroke-2" />
				<div className="grid md:grid-cols-4 justify-items-stretch mt-6 gap-4 ">
					<InfoCard
						title="Viento"
						icon={Wind}
						description="Velocidad Actual"
						data={convertToKnots(currentWeather.wind.speed, 'mtrs/sec')}
					/>
					<InfoCard
                        title="Rachas"
                        icon={Triangle}
                        description="Máxima Racha"
                        data={convertToKnots(currentWeather.wind.gust!, 'mtrs/sec')}
                    />
                    <InfoCardToolTip
                        title="Dirección"
                        icon={Compass}
                        description="Dirección Actual"
                        data={DegreesToCardinal(currentWeather.wind.deg)}
						content={<img src="wind-cardinal-direction.png" alt="tooltip image" />}
                    />
                    <InfoCardToolTip
                        title="Kite"
                        icon={Sailboat}
                        description="Tamaño Recomendado"
                        data={KiteRecommender(currentWeather.wind.speed)}
                        label="mts"
						content="Puede variar según el peso del rider"
                    />
				</div>
				<div className="flex items-center justify-start gap-2 mt-4 text-2xl font-bold text-slate-600">
					<h4 className="mb-1 text-xl md:text-2xl ">Esta Semana</h4>
				</div>
					<hr className="stroke-2" />
				<ForecastDisplay forecast={forecast} />
				{/* <div className="mt-4 text-2xl font-bold text-slate-600">
					<h4 className="mb-1">Mapa</h4>
				</div>
				<hr className="stroke-2" />
				<div className="mt-4 mb-8">
					<Tabs defaultValue="wind">
						<TabsList>
							<TabsTrigger value="wind">Viento</TabsTrigger>
							<TabsTrigger value="precipitation">Precipitación</TabsTrigger>
						</TabsList>
						<TabsContent value="wind">
							{windLoading ? (
								<p>Loading wind map...</p>
							) : (
								windMap && (
									<WeatherMap
										tileUrl={windMap.tileUrl}
										coordinates={windMap.coordinates}
										zoom={windMap.zoom}
										layer={windMap.layer}
									/>
								)
							)}
						</TabsContent>
						<TabsContent value="precipitation">
							{precipitationLoading ? (
								<p>Loading precipitation map...</p>
							) : (
								precipitationMap && (
									<WeatherMap
										tileUrl={precipitationMap.tileUrl}
										coordinates={precipitationMap.coordinates}
										zoom={precipitationMap.zoom}
										layer={precipitationMap.layer}
									/>
								)
							)}
						</TabsContent>
					</Tabs>
				</div> */}
			</div>
		</div>
	);
}
