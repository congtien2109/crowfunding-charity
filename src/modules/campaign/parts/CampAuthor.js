import { defaultImage } from "constants/global";
import React from "react";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
	return (
		<div className="gap-x-2 flex items-center">
			<img className="object-cover w-8 h-8 rounded-full" src={image} alt="" />
			<p className="text-text3 text-xs">
				By <span className="text-text2 font-semibold">{author}</span>
			</p>
		</div>
	);
};

export default CampAuthor;
