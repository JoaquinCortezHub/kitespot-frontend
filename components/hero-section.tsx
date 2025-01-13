"use client";

import React from "react";
import WeatherForm from "./form";
import TypewritterText from "./typewritter-hero-text";

const HeroSection = () => {
	return (
		<div
			className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: "url('hero-image.jpg')" }}
		>
			<div className="absolute inset-0 bg-black opacity-40"></div>
			<div className="relative z-10 flex flex-col items-center p-8 text-white">
				<h1 className="text-4xl font-medium mb-4">KiteSpot</h1>
				<h2>
					<TypewritterText />
				</h2>
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
