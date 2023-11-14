import React from "react";

const CampaignGrid = ({ children }) => {
	return <div className="gap-x-7 grid grid-cols-4">{children}</div>;
};

export default CampaignGrid;
