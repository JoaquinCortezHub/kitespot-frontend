import WeatherData from "@/types/weatherData";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { format } from "date-fns";

type WeatherDisplayProps = {
    data: WeatherData;
};

export default function DataDisplay({ data }: WeatherDisplayProps) {
    const formattedTime = format(new Date(data.location.localtime), "HH:mm a, EEEE")
	return(
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center justify-between gap-4">
                    {data.location.name}, {data.location.country}
                    <img
                        src={data.current.condition.icon} 
                        alt={data.current.condition.text}
                        className="w-16 h-16" 
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2">
                    <div className=" flex justify-between items-center">
                        <span className="text-sm font-medium">Temperature</span>
                        <span className="text-2xl font-bold">{Math.round(data.current.temp_c)}°C</span>
                    </div>


                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Feels like</span>
                        <span>{Math.round(data.current.feelslike_c)}°C</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Condition</span>
                        <span>{data.current.condition.text}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Humidity</span>
                        <span>{data.current.humidity}%</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Wind</span>
                        <span>{data.current.wind_kph}km/h</span>
                    </div>
                    
                    <div className=" flex justify-between items-center">
                        <span className="text-sm font-medium">Local Time</span>
                        <span>{formattedTime}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
};

