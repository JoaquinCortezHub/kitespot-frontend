"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import DataDisplay from "./dataDisplay";
import SearchBar from "./search-bar";
import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { useImageQuery } from "@/hooks/useImageQuery";

export default function WeatherForm() {
	const [location, setLocation] = useState("");
	const [searchTrigger, setSearchTrigger] = useState("");

	const {
		data: weatherData,
		isLoading: weatherLoading,
		error: weatherError,
	} = useWeatherQuery(searchTrigger);
	const {
		data: imageData,
		isLoading: imageLoading,
		error: imageError,
	} = useImageQuery(searchTrigger);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSearchTrigger(location);
	};

	const handleSearch = (query: string) => {
		setSearchTrigger(query);
	};

	return (
		<div className="min-h-[calc(100vh-theme(spacing.36))] flex flex-col items-center justify-start">
			{!weatherData ? (
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
							disabled={weatherLoading || imageLoading}
						>
							{weatherLoading || imageLoading ? "Cargando..." : "Buscar"}
						</Button>
					</form>
				</>
			) : (
				<div className="w-full">
					<div className="mb-4">
						<SearchBar
							onSearch={handleSearch}
						/>
					</div>
					{weatherError && (
						<p className="text-red-500 text-center">
							Error: {weatherError.message}
						</p>
					)}
					{imageError && (
						<p className="text-red-500 text-center">
							Error: {imageError.message}
						</p>
					)}
					{weatherData && <DataDisplay weather={weatherData} image={imageData} />}
				</div>
			)}
		</div>
	);
}
