"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import WeatherData from "@/types/weatherData";
import DataDisplay from "./dataDisplay";

export default function WeatherForm() {
	const [location, setLocation] = useState("");
	const [searchTrigger, setSearchTrigger] = useState("");

	const { data, isLoading, error } = useQuery<WeatherData>({
		queryKey: ["weather", searchTrigger],
		queryFn: async () => {
			if (!searchTrigger) return null;
			const response = await fetch(
				`http://localhost:8001/weather?city=${encodeURIComponent(
					searchTrigger
				)}`
			);
			if (!response.ok) {
				throw new Error("Weather data fetch failed.");
			}
			return response.json();
		},
		enabled: !!searchTrigger,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSearchTrigger(location);
	};

	return (
		<div className="min-h-[calc(100vh-theme(spacing.36))] flex flex-col items-center justify-center">
			{!data ? (
				<>
					<h2 className="text-4xl font-semibold text-slate-800">
						Bienvenido a Kite Cast.
					</h2>
					<form onSubmit={handleSubmit} className="max-w-md mx-auto">
						<div className="mb-4">
							<input
								type="text"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
								placeholder="Buscar por spot..."
								className="w-full px-4 py-2 mt-8 border rounded-lg focus:outline-none focus:border-blue-500"
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
							disabled={isLoading}
						>
							{isLoading ? "Cargando..." : "Buscar"}
						</Button>
					</form>
				</>
			) : (
				<div className="w-full">
					{error && (
						<p className="text-red-500 text-center">Error: {error.message}</p>
					)}
					{data && <DataDisplay data={data} />}
				</div>
			)}
		</div>
	);
}
