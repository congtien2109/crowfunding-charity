import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
	return (
		<div className="bg-lite min-h-screen p-10">
			<ReactModal
				isOpen={false}
				overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center"
				className="modal-content p-10 w-full max-w-[521px] bg-white rounded-2xl outline-none max-h-[90vh] overflow-y-auto scroll-hidden relative"
			>
				<button className="right-10 w-11 h-11 flex justify-center items-center top-[10px] text-text1 absolute z-10 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<h2 className="font-bold text-[25px] text-center mb-10">
					Back this project
				</h2>
				<p className="mb-3 text-sm">Enter the contribute amount</p>
				<input
					type="text"
					placeholder="$10"
					name="amount"
					className="border-strock w-full px-5 py-3 mb-5 text-lg font-medium border rounded"
				/>
				<p className="text-text3 my-5 text-sm">
					Contribution are not associatied with perks
				</p>
				<Button className="bg-primary text-white">Continue</Button>
				<div className="mt-[60px]"></div>
				<CampaignPerk showButton></CampaignPerk>
			</ReactModal>
			<Overlay></Overlay>
			<DashboardTopbar></DashboardTopbar>
			<div className="gap-x-10 flex items-start">
				<DashboardSidebar></DashboardSidebar>
				<div className="flex-1">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default LayoutDashboard;
