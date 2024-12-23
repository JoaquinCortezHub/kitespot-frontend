import React from "react";

type BannerProps = {
    imageUrl: string;
    author: { firstName: string; lastName: string };
};

const ImageBanner: React.FC<BannerProps> = ({ imageUrl, author }) => {
    const fallBackUrl = "https://via.placeholder.com/800x350?text=No+Image+Available";

    return (
        <div className="relative group mb-1">
            <img 
                src={imageUrl || fallBackUrl} 
                alt="Spot picture"
                className="w-full h-[350px] object-cover rounded-xl"
            />
            {author.firstName !== "N/A" && (
                <div className="absolute bottom-2 right-2  opacity-50 text-white text-xs px-3 py-1 rounded group-hover:opacity-100 transition-opacity ">
                    Photo by {author.firstName} {author.lastName} on Unsplash
                </div>
            )}
        </div>
    )
};

export default ImageBanner;