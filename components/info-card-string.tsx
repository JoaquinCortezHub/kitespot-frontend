import convertToKnots from "@/lib/convertToKnots";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Wind } from "lucide-react";
import WeatherData from "@/types/weatherData";

interface InfoCardProps {
	title: string;
	icon: React.ElementType;
	description: string;
	data: string;
	label?: string;
}

export default function InfoCardString({
	title,
	icon: Icon,
	description,
	data,
	label
}: InfoCardProps) {
	return (
		<Card className="bg-white ">
			<CardHeader>
				<CardTitle className="text-slate-600 font-semibold">{title}</CardTitle>
				<CardContent className="flex flex-col">
					<div className="flex flex-col items-center justify-start gap-2 mb-6">
						<div className="flex items-center justify-center rounded-full bg-slate-300 w-16 h-16">
							<Icon className="w-6 h-6" />
						</div>
						<div className="flex flex-col items-center">
							<h2 className="text-gray-500 font-medium">{description}</h2>
							<p className="font-bold text-xl">{data} {label}</p>
						</div>
					</div>
				</CardContent>
			</CardHeader>
		</Card>
	);
}
