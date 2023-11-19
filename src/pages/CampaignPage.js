import { Button } from "components/button";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { Fragment } from "react";

const CampaignPage = () => {
	return (
		<Fragment>
			<div className="rounded-3xl flex items-center justify-between px-10 py-8 mb-10 bg-white">
				<div className="gap-x-6 flex items-start">
					<div className="w-14 h-14 bg-secondary bg-opacity-60 flex items-center justify-center text-white rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="flex-1">
						<h1 className="text-[22px] font-semibold mg-2">
							Create Your Campaign
						</h1>
						<p className="text-text3 mb-2 text-sm"></p>
						<a href="/" className="text-primary text-sm">
							Need any help? Learn More...
						</a>
					</div>
				</div>
				<Button
					type="button"
					kind="ghost"
					className="px-8"
					href="/start-campaign"
				>
					Create campaign
				</Button>
			</div>
			<Heading number={4}>Your Campaign</Heading>
			<CampaignGrid type="secondary">
				<CampaignFeature></CampaignFeature>
				<CampaignFeature></CampaignFeature>
				<CampaignFeature></CampaignFeature>
			</CampaignGrid>
			<div className="mt-10">
				<Button kind="ghost" className="px-8 mx-auto">
					<span>See more</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5"
					>
						<path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
					</svg>
				</Button>
			</div>
		</Fragment>
	);
};

export default CampaignPage;
