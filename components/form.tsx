"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WeatherForm() {
	const [location, setLocation] = useState("");

	return (
		<div>
			<div className="flex items-center gap-2 max-w-lg ">
				<div className="min-w-full">
					<input
						type="text"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						placeholder="Buscar por spot..."
						className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 text-black"
						required
					/>
				</div>
				<Link href={`/results?query=${location}`} passHref>
					<Button className="w-sm bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
						Buscar
					</Button>
				</Link>
			</div>
		</div>
	);
}
