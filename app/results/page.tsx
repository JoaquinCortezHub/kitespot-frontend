"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useWeatherQuery } from "@/hooks/useWeatherQuery"; 
import { useImageQuery } from "@/hooks/useImageQuery";
import DataDisplay from "@/components/dataDisplay";
import SkeletonDisplay from "./skeletonLoading";
import SearchBar from "@/components/search-bar";
import { toast } from "react-toastify";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

    useEffect(() => {
        if(weatherError || imageError) {
            toast.error(`No se encontraron resultados para "${queryString}"`, {
                position: "bottom-center",
                hideProgressBar: true
            })
        }
    }, [weatherError, imageError, queryString])

    if(weatherError || imageError) {
        return(
            <div className="flex flex-col items-center justify-center min-h-screen">
                <img
                    src="404.png" 
                    alt="Results not found image" 
                    className="h-[450px] w-[500px] rounded-full"
                />
                <p className="text-gray-400 mb-6">
                    Illustration by <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC" className="underline">Pixeltrue Ouch!</a>
                </p>
                <Link href={'/'}>
                    <Button 
                        variant={'outline'}
                        className="hover:bg-blue-500 hover:text-white transition-colors"
                    >
                        Volver al inicio
                    </Button>
                </Link>
            </div>
        )
    }

    return(
        <div className="mx-auto px-6 sm:px-6 lg:px-36 mt-24">
            <SearchBar onSearch={handleNewSearch}  />
            {weatherLoading || imageLoading ? (
                <SkeletonDisplay />
            ) : (
                <>
					{weatherData && <DataDisplay weather={weatherData} image={imageData} />}
                </>
            )}
        </div>
    )
}