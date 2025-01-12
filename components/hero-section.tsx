"use client";

import React from "react";
import WeatherForm from "./form";

const HeroSection = () => {
	return (
		<div
			className="relative min-h-screen flex items-center justify-center bg-cover bg-center rounded-2xl"
			style={{ backgroundImage: "url('hero-image.jpg')" }}
		>
			<div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
			<div className="relative z-10 flex flex-col items-center p-8 text-white">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					El mejor spot para_
				</h1>
				<p className="text-lg mb-6 text-center">
					Con KiteSpot, conoce y analiza las condiciones de tu spot favorito{" "}
					<br /> para disfrutar al máximo de tu sesión.
				</p>
				<WeatherForm />
			</div>
		</div>
	);
};

export default HeroSection;
