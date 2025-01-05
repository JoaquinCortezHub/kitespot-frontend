import React, { useEffect, useRef } from "react";
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
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    useEffect(() => {
        import("leaflet").then(L => {
            if(mapRef.current && !mapInstanceRef.current) {
                mapInstanceRef.current = L.map(mapRef.current).setView([coordinates.lat, coordinates.lon], zoom);

                console.log("tile URL: ", tileUrl)

                L.tileLayer(tileUrl, {
                    attribution: '&copy; <a href="https://www.openweathermap.org/copyright">OpenWeatherMap</a> contributors',
                }).addTo(mapInstanceRef.current);
            }
        });

        return () => {
            if(mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            };
        };
    }, [tileUrl, coordinates, zoom])

    return(
        <div ref={mapRef} className="w-full h-[500px] rounded-lg"></div>
    )
}