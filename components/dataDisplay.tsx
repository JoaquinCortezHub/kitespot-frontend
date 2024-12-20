import WeatherData from "@/types/weatherData";
import React from "react";
import { format } from "date-fns";

import { Compass, Sailboat, Triangle, Wind } from "lucide-react";
import InfoCard from "./info-card-number";
import InfoCardString from "./info-card-string";
import InfoCardToolTip from "./info-card-tooltip";
import KiteRecommender from "@/lib/kiteRecommender";

type WeatherDisplayProps = {
	data: WeatherData;
};

export default function DataDisplay({ data }: WeatherDisplayProps) {
	const formattedLastUpdated = format(data.current.last_updated, "HH:mm ");

	return (
		<div className="mx-auto">
			<div className="flex flex-col">
				<div className="w-full bg-slate-500 h-[250px] rounded-xl mb-2"></div>
				<div className="flex items-center justify-start gap-2">
					<h1 className="text-3xl font-bold">
						{data.location.name}, {data.location.region}
					</h1>
					<img
						src={data.current.condition.icon}
						alt={data.current.condition.text}
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
						data={data.current.wind_kph}
					/>
					<InfoCard
                        title="Rachas"
                        icon={Triangle}
                        description="Máxima Racha"
                        data={data.current.gust_kph}
                    />
                    <InfoCardString
                        title="Dirección"
                        icon={Compass}
                        description="Dirección Actual"
                        data={data.current.wind_dir}
                    />
                    <InfoCardToolTip
                        title="Kite"
                        icon={Sailboat}
                        description="Tamaño Recomendado"
                        data={KiteRecommender(data.current.wind_kph)}
                        label="mts"
                    />
				</div>
			</div>
		</div>
	);
}
