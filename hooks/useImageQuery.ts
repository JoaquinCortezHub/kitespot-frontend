import { useQuery } from "@tanstack/react-query";

export const useImageQuery = (spotName: string) => {
	return useQuery({
		queryKey: ["image", spotName],
		queryFn: async () => {
			if (!spotName) return null;

			const response = await fetch(
				`https://kitespot-backend-production.up.railway.app/unsplash/getSpotImage?spot=${encodeURIComponent(spotName)}`
			);

			if (!response.ok) {
				throw new Error("Image data fetch failed.");
			}

			return response.json();
		},
		enabled: !!spotName, 
	});
};

