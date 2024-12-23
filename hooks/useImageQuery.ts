import { useQuery } from "@tanstack/react-query";

export const useImageQuery = (spotName: string) => {
	return useQuery({
		queryKey: ["image", spotName],
		queryFn: async () => {
			if (!spotName) return null;

			const response = await fetch(
				`http://localhost:8000/unsplash/getSpotImage?spot=${encodeURIComponent(spotName)}`
			);

			if (!response.ok) {
				throw new Error("Image data fetch failed.");
			}

			return response.json();
		},
		enabled: !!spotName, 
	});
};
