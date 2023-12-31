import useToggleValue from "hooks/useToggleValue";
import React, { useEffect } from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button, ButtonGoogle } from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";
const schema = yup.object({
	email: yup.string().email("").required("This field is required"),
	password: yup
		.string()
		.required("This field is required")
		.min(8, "Password must be 8 character"),
});
const SignInPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit",
	});
	const { value: showPassword, handleToggleValue: handleTogglePassword } =
		useToggleValue();
	const dispatch = useDispatch();
	const handleSignIn = (values) => {
		dispatch(authLogin(values));
	};
	const { user } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (user && user.id) {
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
	return (
		<LayoutAuthentication heading="Welcome Back!">
			<p className="lg:text-sm text-text3 lg:mb-8 mb-6 text-xs font-normal text-center">
				Don't have an account?{" "}
				<Link to="/register" className="text-primary font-medium underline">
					Register
				</Link>
			</p>
			<ButtonGoogle text="Sign in with google"></ButtonGoogle>
			<form onSubmit={handleSubmit(handleSignIn)}>
				<FormGroup>
					<Label htmlFor="email">Email *</Label>
					<Input
						control={control}
						name="email"
						placeholder="example@gmail.com"
						error={errors.email?.message}
					></Input>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">Password *</Label>
					<Input
						control={control}
						name="password"
						type={`${showPassword ? "text" : "password"}`}
						placeholder="Enter password"
						error={errors.password?.message}
					>
						<IconEyeToggle
							open={showPassword}
							onClick={handleTogglePassword}
						></IconEyeToggle>
					</Input>
				</FormGroup>
				<FormGroup>
					<div className="text-right">
						<span className="text-primary inline-block text-sm font-medium">
							Forgot password
						</span>
					</div>
				</FormGroup>
				<Button className="w-full" kind="primary" type="submit">
					Sign in
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignInPage;
