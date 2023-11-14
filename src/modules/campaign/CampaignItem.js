import React from "react";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
	return (
		<div className="shadow-sdprimary rounded-xl">
			<CampImage></CampImage>
			<div className="px-5 py-4">
				<CampCategory></CampCategory>
				<CampTitle>Powered Kits Learning Boxes</CampTitle>
				<CampDesc>
					Fun, durable and reusable boxes with eco-friendly options.
				</CampDesc>
				<div className="gap-x-5 flex items-start justify-between mb-5">
					<CampMeta></CampMeta>
					<CampMeta></CampMeta>
				</div>
				<CampAuthor></CampAuthor>
			</div>
		</div>
	);
};

export default CampaignItem;
