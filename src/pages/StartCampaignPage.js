import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);
	useEffect(() => {
		if (!user || !user.email) {
			navigate("/login");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
	return (
		<Fragment>
			<CampaignAddNew></CampaignAddNew>
		</Fragment>
	);
};

export default StartCampaignPage;
