import React from "react";
import { Link } from "react-router-dom";
import DashboardSearch from "./DashboardSearch";
import DashboardFund from "./DashboardFund";
import { Button } from "components/button";

const DashboardTopbar = () => {
	return (
		<div className="flex items-center justify-between mb-8">
			<div className="gap-x-10 flex items-center flex-1">
				<Link to="/" className="inline-block">
					<img srcSet="/logo.png 2x" alt="crowfunding-app" />
				</Link>
				<div className=" max-w-[458px] w-full">
					<DashboardSearch></DashboardSearch>
				</div>
			</div>
			<div className="gap-x-10 flex items-center justify-end flex-1">
				<DashboardFund></DashboardFund>
				<Button className="bg-secondary">Start a campaign</Button>
				<img
					srcSet="/logo.png 2x"
					alt="crowfunding-app"
					className="object-cover rounded-full"
				/>
			</div>
		</div>
	);
};

export default DashboardTopbar;
