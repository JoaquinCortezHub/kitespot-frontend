"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useWeatherQuery } from "@/hooks/useWeatherQuery"; 
import { useImageQuery } from "@/hooks/useImageQuery";
import DataDisplay from "@/components/dataDisplay";
import SkeletonDisplay from "./skeletonLoading";
import SearchBar from "@/components/search-bar";

export default function ResultsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const queryString = Array.isArray(query) ? query[0] : query || ""; //!
    const {
        data: weatherData,
        isLoading: weatherLoading,
        error: weatherError
    } = useWeatherQuery(queryString);
    const {
        data: imageData,
        isLoading: imageLoading,
        error: imageError
    } = useImageQuery(queryString);

    useEffect(() => {
        if(!query) {
            router.push("/");
        }
    }, [query, router]);

    const handleNewSearch = (newQuery: string) => {
        router.push(`/results?query=${newQuery}`);
    };

    return(
        <div className="mx-auto px-6 sm:px-6 lg:px-36 mt-24">
            <SearchBar onSearch={handleNewSearch}  />
            {weatherLoading || imageLoading ? (
                <SkeletonDisplay />
            ) : (
                <>
                    {weatherError && <p className="text-red-500 text-center">Error: {weatherError.message}</p>}
					{imageError && <p className="text-red-500 text-center">Error: {imageError.message}</p>}
					{weatherData && <DataDisplay weather={weatherData} image={imageData} />}
                </>
            )}
        </div>
    )
}