import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ children }) => {
	return (
		<div className="bg-lite min-h-screen p-10">
			<div className="overlay bg-opacity-10 fixed inset-0 z-40 bg-black"></div>
			<DashboardTopbar></DashboardTopbar>
			<div className="gap-x-10 flex items-start">
				<DashboardSidebar></DashboardSidebar>
				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
};

export default LayoutDashboard;
