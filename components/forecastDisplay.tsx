import { WeatherData } from "@/types/weatherData";
import React from "react";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";
import { groupForecastByDay } from "@/utils/forecastUtils";
import { Card, CardContent } from "./ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import convertToKnots from "@/utils/convertToKnots";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { DegreesToCardinal } from "@/utils/windConverter";
import KiteRecommender from "@/utils/kiteRecommender";

type ForecastDisplayProps = {
	forecast: WeatherData["forecast"];
};

const ForecastDisplay = ({ forecast }: ForecastDisplayProps) => {
	const dailyForecasts = groupForecastByDay(forecast.list).slice(0, 6);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mb-4">
			{dailyForecasts.map((day) => (
				<AlertDialog key={day.date}>
					<AlertDialogTrigger asChild>
						<Card className="bg-white hover:bg-slate-50 cursor-pointer transition-colors">
							<CardContent className="pt-6">
								<div className="flex flex-col items-center space-y-2">
									<h3 className="font-semibold">
										{format(new Date(day.date), "EEEE", { locale: es })}
									</h3>
									<img
										src={`http://openweathermap.org/img/wn/${day.weatherIcon}@2x.png`}
										alt={day.weatherDescription}
										className="w-16 h-16"
									/>
									<div className="text-center">
										<div className="flex items-center justify-between gap-2">
											<p className="text-2xl font-semibold">
												{Math.round(day.maxTemp)}°C
											</p>
											/
											<p className="text-2xl font-semibold text-slate-400">
												{Math.round(day.minTemp)}°C
											</p>
										</div>
										<div className="flex items-center justify-between gap-6 my-2">
											<div className="flex flex-col items-center justify-center">
												<p className="text-md font-medium">
													{day.averageWind}kts
												</p>
												<p>vel.</p>
											</div>
											<div className="flex flex-col items-center justify-center">
												<p className="text-md font-medium">
													{day.maxGust}kts
												</p>
												<p>racha</p>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</AlertDialogTrigger>
					<AlertDialogContent className="max-w-4xl bg-white">
						<AlertDialogHeader>
							<AlertDialogTitle>
								<div className="text-2xl text-center">
									{format(new Date(day.date), "EEEE, d MMMM", { locale: es })}
								</div>
							</AlertDialogTitle>
						</AlertDialogHeader>
						<div className="max-h-[60vh] overflow-auto">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Hora</TableHead>
										<TableHead>Temp.</TableHead>
										<TableHead>Clima</TableHead>
										<TableHead className="text-center">
											Velocidad (kts)
										</TableHead>
										<TableHead className="text-center">Rachas (kts)</TableHead>
										<TableHead className="text-center">Viento</TableHead>
										<TableHead className="text-center">Kite</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{day.hourlyData.map((hour) => (
										<TableRow key={hour.dt}>
											<TableCell>
												{format(new Date(hour.dt_txt), "HH:mm")}
											</TableCell>
											<TableCell>
												{Math.round(hour.main.temp)}°C
											</TableCell>
											<TableCell>
												<img
													src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
													alt={hour.weather[0].description}
													className="w-8 h-8"
												/>
											</TableCell>
											<TableCell>
												<div className="text-center">
													{Math.round(convertToKnots(hour.wind.speed, 'mtrs/sec'))}
												</div>
											</TableCell>
											<TableCell>
												<div className="text-center">
													{Math.round(convertToKnots(hour.wind.gust, 'mtrs/sec'))}
												</div>
											</TableCell>
											<TableCell>
												<div className="text-center">
												{DegreesToCardinal(hour.wind.deg)}
												</div>
											</TableCell>
											<TableCell>
												<div className="text-center">
													{KiteRecommender(hour.wind.speed)}
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table> 
						</div>
					</AlertDialogContent>
				</AlertDialog>
			))}
		</div>
	);
};

export default ForecastDisplay;
