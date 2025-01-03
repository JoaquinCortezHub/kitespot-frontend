import { WeatherData } from "@/types/weatherData";
import React from "react";
import { format } from "date-fns";

import { Compass, Info, Sailboat, Triangle, Wind } from "lucide-react";
import InfoCard from "./info-card-number";
import InfoCardString from "./info-card-string";
import InfoCardToolTip from "./info-card-tooltip";
import KiteRecommender from "@/utils/kiteRecommender";
import ImageBanner from "./image-banner";
import ForecastDisplay from "./forecastDisplay";
import { Separator } from "./ui/separator";
import convertToKnots from "@/utils/convertToKnots";
import { DegreesToCardinal } from "@/utils/windConverter";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

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
	const {currentWeather, forecast} = weather;
	const formattedLastUpdated = format(currentWeather.dt, "HH:mm ");
	const fallBackImage = {
		imageUrl: "https://via.placeholder.com/800x350?text=No+Image+Available",
		author: { firstName: "Unknown", lastName: "" }
	};

	const safeImage = image?.imageUrl ? image : fallBackImage;

	return (
		<div className="mx-auto">
			<div className="flex flex-col">
				<ImageBanner imageUrl={safeImage.imageUrl} author={safeImage.author} />
				<div className="flex items-center justify-start gap-2">
					<h1 className="text-3xl font-bold">
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
				<div className="mt-4 text-2xl font-bold text-slate-600">
					<h4 className="mb-1">Hoy</h4>
				</div>
					<hr className="stroke-2" />
				<div className="grid grid-cols-4 justify-items-stretch mt-6 gap-4 ">
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
                    <InfoCardString
                        title="Dirección"
                        icon={Compass}
                        description="Dirección Actual"
                        data={DegreesToCardinal(currentWeather.wind.deg)}
                    />
                    <InfoCardToolTip
                        title="Kite"
                        icon={Sailboat}
                        description="Tamaño Recomendado"
                        data={KiteRecommender(currentWeather.wind.speed)}
                        label="mts"
                    />
				</div>
				<div className="flex items-center justify-start gap-2 mt-4 text-2xl font-bold text-slate-600">
					<h4 className="mb-1">Esta Semana</h4>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Info />
							</TooltipTrigger>
							<TooltipContent>
								<p>Lo valores de velocidad y rachas máximas son aproximados.</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
					<hr className="stroke-2" />
				<ForecastDisplay forecast={forecast} />
				<div className="mt-4 text-2xl font-bold text-slate-600">
					<h4 className="mb-1">Spot</h4>
				</div>
					<hr className="stroke-2" />
			</div>
		</div>
	);
}
