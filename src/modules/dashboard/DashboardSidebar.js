import {
	IconDashboard,
	IconPayment,
	IconWithdraw,
	IconCampaign,
	IconProfile,
	IconLogout,
	IconDarkmode,
} from "components/icons";

import React from "react";
import { NavLink } from "react-router-dom";
const sidebarLink = [
	{
		url: "/",
		title: "Dashboard",
		icon: <IconDashboard></IconDashboard>,
	},
	{
		url: "/campaign",
		title: "Campaign",
		icon: <IconCampaign></IconCampaign>,
	},
	{
		url: "/payment",
		title: "Payment",
		icon: <IconPayment></IconPayment>,
	},
	{
		url: "/withdraw",
		title: "Withdraw",
		icon: <IconWithdraw></IconWithdraw>,
	},
	{
		url: "/profile",
		title: "Profile",
		icon: <IconProfile></IconProfile>,
	},
	{
		url: "/#",
		title: "Logout",
		icon: <IconLogout></IconLogout>,
		onClick: () => {},
	},
	{
		url: "/#",
		title: "Light/Dark",
		icon: <IconDarkmode></IconDarkmode>,
		onClick: () => {},
	},
];
const DashboardSidebar = () => {
	return (
		<div className="flex-shrink-0 w-full md:w-[76px] flex flex-col px-[14px] rounded-3xl py-10 bg-white shadow-[10px_10px_20px_0px_rgba(218_,_213,_213,_0.15)]">
			{sidebarLink.map((link) => (
				<NavLink
					key={link.title}
					to={link.url}
					className="gap-x-5 last:mt-auto last:bg-white last:shadow-sdprimary md:h-12 md:w-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color flex items-center"
				>
					<span className="">{link.icon}</span>
					<span className="md:hidden">{link.title}</span>
				</NavLink>
			))}
		</div>
	);
};

export default DashboardSidebar;
