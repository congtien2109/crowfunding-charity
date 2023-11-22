import LayoutDashboard from "layout/LayoutDashboard";
import Modal from "react-modal";
import CampaignView from "modules/campaign/CampaignView";
import CampaignPage from "pages/CampaignPage";
import DashboardPage from "pages/DashboardPage";
import StartCampaignPage from "pages/StartCampaignPage";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPayment from "layout/LayoutPayment";
import CheckoutPage from "pages/CheckoutPage";
import ShippingPage from "pages/ShippingPage";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
	return (
		<Suspense>
			<Routes>
				<Route element={<LayoutDashboard></LayoutDashboard>}>
					<Route path="/" element={<DashboardPage></DashboardPage>}></Route>
					<Route
						path="/campaign"
						element={<CampaignPage></CampaignPage>}
					></Route>
					<Route
						path="/start-campaign"
						element={<StartCampaignPage></StartCampaignPage>}
					></Route>
					<Route
						path="/campaign/:slug"
						element={<CampaignView></CampaignView>}
					></Route>
				</Route>
				<Route element={<LayoutPayment></LayoutPayment>}>
					<Route
						path="/checkout"
						element={<CheckoutPage></CheckoutPage>}
					></Route>
					<Route
						path="/shipping-address"
						element={<ShippingPage></ShippingPage>}
					></Route>
				</Route>
				<Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
				<Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
			</Routes>
		</Suspense>
	);
}

export default App;
