import React from "react";

const CampaignGrid = ({ children, type = "default" }) => {
	if (type !== "default")
		return <div className="gap-y-10 grid grid-cols-1">{children}</div>;
	return <div className="gap-x-7 grid grid-cols-4">{children}</div>;
};

export default CampaignGrid;
