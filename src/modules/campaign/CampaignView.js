import React, { Fragment } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";

const CampaignView = () => {
	return (
		<Fragment>
			<div
				className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center flex items-center justify-center text-white font-bold text-[40px] mb-10"
				style={{
					backgroundImage: `linear-gradient(rgba(32, 18, 63, 0), rgba(32, 18, 63, 0.4)),url(/bannerEdu.png)`,
				}}
			>
				<h1>Education</h1>
			</div>
			<div className="gap-x-10 flex items-start w-full max-w-[1066px]">
				<div className="flex-1">
					<CampImage className="h-[398px] mb-8"></CampImage>
					<div className="gap-x-5 flex justify-center">
						{Array(4)
							.fill(0)
							.map((item, index) => (
								<img
									src="https://source.unsplash.com/random"
									className="w-[89px] h-[70px] object-cover rounded-lg"
									alt=""
									key={index}
								/>
							))}
					</div>
				</div>
				<div className="flex-1 max-w-[443px]">
					<CampCategory text="Architecture" className="text-sm"></CampCategory>
					<CampTitle className="mb-4 text-xl font-bold">
						Remake - We Make architecture exhibition
					</CampTitle>
					<CampDesc className="mb-6 text-sm">
						Remake - We Make: an exhibition about architecture's social agency
						in the face of urbanisation
					</CampDesc>
					<CampViewAuthor></CampViewAuthor>
					<div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
						<div className="bg-primary w-2/4 h-full rounded-full"></div>
					</div>
					<div className="gap-x-5 flex items-start justify-between mb-4">
						<CampMeta size="big"></CampMeta>
						<CampMeta size="big"></CampMeta>
						<CampMeta size="big"></CampMeta>
					</div>
					<Button className="bg-primary w-full text-white">
						Back this project
					</Button>
				</div>
			</div>
			<div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
				<div className="gap-x-14 text-text3 flex items-center text-sm font-medium">
					<span className="text-secondary cursor-pointer">Campaign</span>
				</div>
				<Button className="bg-primary text-white">Back this project</Button>
			</div>
			<div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
				<div>
					<h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
					<div className="w-full bg-white"></div>
				</div>
				<div>
					<CampaignSupport></CampaignSupport>
					<div className="mb-[60px]"></div>
					<div className="flex flex-col gap-y-[30px]">
						<CampaignPerk></CampaignPerk>
						<CampaignPerk></CampaignPerk>
						<CampaignPerk></CampaignPerk>
					</div>
				</div>
			</div>
			<h2 className="mb-10 text-xl font-semibold">
				You also may be interested in
			</h2>
			<CampaignGrid>
				<CampaignItem></CampaignItem>
				<CampaignItem></CampaignItem>
				<CampaignItem></CampaignItem>
				<CampaignItem></CampaignItem>
			</CampaignGrid>
		</Fragment>
	);
};

export default CampaignView;
