"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WeatherForm() {
	const [location, setLocation] = useState("");

	return (
		<div className="min-h-[calc(100vh-theme(spacing.36))] flex flex-col items-center justify-start">
			<h2 className="text-4xl font-semibold text-slate-800">
				Bienvenido a KiteSpot.
			</h2>
			<div className="max-w-md mx-auto">
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
				<Link href={`/results?query=${location}`} passHref>
					<Button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
						Buscar
					</Button>
				</Link>
			</div>
		</div>
	);
}
