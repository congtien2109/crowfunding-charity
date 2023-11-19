import { Button } from "components/button";
import { defaultImage } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = ({ showButton = false }) => {
	return (
		<div>
			<div className="shadow-1 rounded-xl bg-white">
				<img
					src={defaultImage}
					className="h-[232px] object-cover rounded-xl w-full"
					alt=""
				/>
				<div className="p-5">
					<span className="bg-secondary inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm">
						Featured
					</span>
					<CampTitle className="mb-1 text-xl font-semibold">
						Special One Camera
					</CampTitle>
					<div className="gap-x-3 flex items-center mb-4">
						<span className="text-text1 text-xl font-bold">$2,724 USD</span>{" "}
						<span className="text-error text-sm font-medium line-through">
							$1,504 USD
						</span>
						<span className="text-error text-sm font-medium">(12% OFF)</span>
					</div>
					<div className="gap-y-1 flex flex-col mb-4">
						<strong>Estimated Shipping</strong>{" "}
						<span className="text-text2">October 2022</span>
					</div>
					<p className="text-text2 mb-4">
						<strong className="text-text1">05</strong> claimed
					</p>
					<p className="text-text2">Ships worldwide</p>
				</div>
			</div>
			{showButton && (
				<div className="mt-6">
					<Button className="bg-secondary w-full text-white">
						Get this perk
					</Button>
				</div>
			)}
		</div>
	);
};

export default CampaignPerk;
