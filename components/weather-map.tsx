import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface WeatherMapProps {
    tileUrl: string;
    coordinates: {
        lat: number;
        lon: number;
    };
    zoom: number;
    layer: string;
};

export default function WeatherMap({ tileUrl, coordinates, zoom }: WeatherMapProps) {
    useEffect(() => {
        const map = L.map("map").setView([coordinates.lat, coordinates.lon], zoom);

        L.tileLayer(tileUrl, {
            attribution: '&copy <a href="https://www.openweathermap.org/copyright">Openweathermap</a> contributors',
        }).addTo(map);

        return () => {
            map.remove();
        };
    }, [tileUrl, coordinates, zoom])

    return(
        <div id="map" className="w-full h-[350px]"></div>
    )
}