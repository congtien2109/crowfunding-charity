import { call } from "redux-saga/effects";
import {
	requestAuthFetchMe,
	requestAuthLogin,
	requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

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
		const response = yield call(requestAuthFetchMe(payload));
		console.log("function*handleAuthFetchMe ~ response:", response);
	} catch (error) {}
}
export { handleAuthLogin, handleAuthFetchMe };
