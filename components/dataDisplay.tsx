import WeatherData from "@/types/weatherData";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { format } from "date-fns";
import { Badge } from "./ui/badge";

type WeatherDisplayProps = {
    data: WeatherData;
};

export default function DataDisplay({ data }: WeatherDisplayProps) {
    const formattedTime = format(new Date(data.location.localtime), "HH:mm a, EEEE")

    const convertToKnots = (speed: number): number => {
        const knots = speed * 0.539957;
        return knots;
    };
	return(
        <div className="mx-auto">
            <div className="flex flex-col">
                <div className="flex items-center justify-start gap-4">
                    <h1 className="text-3xl font-bold">
                        {data.location.name}, {data.location.region}
                    </h1>
                    <img 
                        src={data.current.condition.icon} 
                        alt={data.current.condition.text} 
                    />
                    
                </div>
                <div>
                </div>
            </div>
        </div>
    )
};

