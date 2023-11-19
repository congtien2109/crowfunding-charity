import { IconMoneyBag } from "components/icons";
import React from "react";

const Banner = () => {
	return (
		<div className="bg-secondary w-full h-[120px] pr-24 pl-11 flex items-center rounded-lg text-white gap-x-32 relative">
			<div className="gap-x-5 flex items-start">
				<IconMoneyBag></IconMoneyBag>
				<span className="text-2xl font-bold">
					You will get 90% of total raised
				</span>
			</div>
			<div className="flex gap-x-[6px]">
				<div className="w-[140px] h-[140px] rounded-full border-white border-[34px] border-opacity-5 border-t-transparent absolute -top-1/2"></div>
				<div className="w-[140px] h-[140px] rounded-full border-white border-[34px] border-opacity-5 border-b-transparent absolute -b-1/2 right-24"></div>
			</div>
		</div>
	);
};

export default Banner;
