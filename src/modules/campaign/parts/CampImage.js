import { itemImage } from "constants/global";
import React from "react";

const CampImage = ({ image = itemImage, className = "h-[158px]" }) => {
	return (
		<div className={className}>
			<img
				className="rounded-xl object-cover w-full h-full"
				src={image}
				alt=""
			/>
		</div>
	);
};

export default CampImage;
