import { call, put } from "redux-saga/effects";
import {
	requestAuthFetchMe,
	requestAuthLogin,
	requestAuthRefreshToken,
	requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { logOut, saveToken } from "utils/auth";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
	const { payload } = action;
	try {
		const response = yield call(requestAuthRegister, payload);
		console.log("function*handleAuthRegister ~ response:", response);
		if (response.status === 201) {
			toast.success("Created new account successfully");
		}
	} catch (error) {
		console.log(error);
	}
}
function* handleAuthLogin({ payload }) {
	try {
		const response = yield call(requestAuthLogin, payload);
		console.log("function*handleAuthLogin ~ response:", response);
		if (response.data.accessToken && response.data.refreshToken) {
			saveToken(response.data.accessToken, response.data.refreshToken);
			yield call(handleAuthFetchMe, { payload: response.data.accessToken });
		}
		yield 1;
	} catch (error) {}
}
function* handleAuthFetchMe({ payload }) {
	try {
		const response = yield call(requestAuthFetchMe, payload);
		console.log("function*handleAuthFetchMe ~ response:", response);
		if (response.status === 200) {
			yield put(
				authUpdateUser({
					user: response.data,
					accessToken: payload,
				})
			);
		}
	} catch (error) {}
}
function* handleAuthRefreshToken({ payload }) {
	try {
		const response = yield call(requestAuthRefreshToken, payload);
		if (response.data) {
			saveToken(response.data.accessToken, response.data.refreshToken);
			yield call(handleAuthFetchMe, { payload: response.data.accessToken });
		} else {
			yield handleAuthLogOut();
		}
	} catch (error) {}
}
function* handleAuthLogOut() {
	yield put(
		authUpdateUser({
			user: undefined,
			accessToken: null,
		})
	);
	logOut();
}
export {
	handleAuthLogin,
	handleAuthFetchMe,
	handleAuthRefreshToken,
	handleAuthLogOut,
};
