import { WeatherData } from "@/types/weatherData";
import React from "react";

type ForecastDisplayProps = {
	forecast: WeatherData['forecast'];
};

const ForecastDisplay = ({ forecast }: ForecastDisplayProps ) => {
	return(
		<div className="grid grid-">

		</div>
	);
};

export default ForecastDisplay;
