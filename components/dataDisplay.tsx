import WeatherData from "@/types/weatherData";
import React from "react";
import { format } from "date-fns";

import { Compass, Sailboat, Triangle, Wind } from "lucide-react";
import InfoCard from "./info-card-number";
import InfoCardString from "./info-card-string";
import InfoCardToolTip from "./info-card-tooltip";
import KiteRecommender from "@/lib/kiteRecommender";
import ImageBanner from "./image-banner";

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
	const formattedLastUpdated = format(weather.current.last_updated, "HH:mm ");
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
						{weather.location.name}, {weather.location.region}
					</h1>
					<img
						src={weather.current.condition.icon}
						alt={weather.current.condition.text}
					/>
				</div>
				<div>
					<p className="text-slate-500 font-medium -mt-2">
						Última actualización: {formattedLastUpdated}
					</p>
				</div>
				<div className="grid grid-cols-4 justify-items-stretch mt-6 gap-4 ">
					<InfoCard
						title="Viento"
						icon={Wind}
						description="Velocidad Actual"
						data={weather.current.wind_kph}
					/>
					<InfoCard
                        title="Rachas"
                        icon={Triangle}
                        description="Máxima Racha"
                        data={weather.current.gust_kph}
                    />
                    <InfoCardString
                        title="Dirección"
                        icon={Compass}
                        description="Dirección Actual"
                        data={weather.current.wind_dir}
                    />
                    <InfoCardToolTip
                        title="Kite"
                        icon={Sailboat}
                        description="Tamaño Recomendado"
                        data={KiteRecommender(weather.current.wind_kph)}
                        label="mts"
                    />
				</div>
			</div>
		</div>
	);
}
