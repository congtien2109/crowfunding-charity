import LayoutDashboard from "layout/LayoutDashboard";
import Modal from "react-modal";
import CampaignView from "modules/campaign/CampaignView";
import CampaignPage from "pages/CampaignPage";
import DashboardPage from "pages/DashboardPage";
import StartCampaignPage from "pages/StartCampaignPage";
import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPayment from "layout/LayoutPayment";
import CheckoutPage from "pages/CheckoutPage";
import ShippingPage from "pages/ShippingPage";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (user && user.id) {
			const { access_token } = getToken();
			dispatch(
				authUpdateUser({
					user: user,
					accessToken: access_token,
				})
			);
		} else {
			const { refresh_token } = getToken();
			if (refresh_token) {
				dispatch(authRefreshToken(refresh_token));
			} else {
				dispatch(authUpdateUser({}));
				logOut();
			}
		}
	}, [dispatch, user]);
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
				<Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
				<Route path="/login" element={<SignInPage></SignInPage>}></Route>
			</Routes>
		</Suspense>
	);
}

export default App;
