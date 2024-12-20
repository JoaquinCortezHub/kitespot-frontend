import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface InfoCardProps {
	title: string;
	icon: React.ElementType;
	description: string;
	data: string;
	label?: string;
}

export default function InfoCardToolTip({
	title,
	icon: Icon,
	description,
	data,
	label,
}: InfoCardProps) {
	return (
		<Card className="bg-white ">
			<CardHeader>
				<CardTitle className="flex items-center justify-between text-slate-600 font-semibold">
					{title}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Info />
							</TooltipTrigger>
							<TooltipContent>
								<p>Puede variar según el peso del rider</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</CardTitle>
				<CardContent className="flex flex-col">
					<div className="flex flex-col items-center justify-start gap-2 mb-6">
						<div className="flex items-center justify-center rounded-full bg-slate-300 w-16 h-16">
							<Icon className="w-6 h-6" />
						</div>
						<div className="flex flex-col items-center">
							<h2 className="text-gray-500 font-medium">{description}</h2>
							<p className="font-bold text-xl">
								{data} {label}
							</p>
						</div>
					</div>
				</CardContent>
			</CardHeader>
		</Card>
	);
}
