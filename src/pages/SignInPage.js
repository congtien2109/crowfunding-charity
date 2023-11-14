import useToggleValue from "hooks/UseToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import ButtonGoogle from "components/button/ButtonGoogle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button } from "components/button";
const schema = yup
	.object({
		name: yup.string().required("This field is required"),
		email: yup.string().email("").required("This field is required"),
		password: yup
			.string()
			.required("This field is required")
			.min(8, "Password must be 8 character"),
	})
	.required();
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
	const handleSignIn = (values) => {};
	return (
		<LayoutAuthentication heading="Welcome Back!">
			<p className="lg:text-sm text-text3 lg:mb-8 mb-6 text-xs font-normal text-center">
				Don't have an account?{" "}
				<Link to="/sign-up" className="text-primary font-medium underline">
					Sign up
				</Link>
			</p>
			<ButtonGoogle text="Sign in with google"></ButtonGoogle>
			<form onSubmit={handleSubmit(handleSignIn)}>
				<FormGroup>
					<Label htmlFor="email">Email *</Label>
					<Input
						control={control}
						name="email"
						type="email"
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
				<Button className="bg-primary" type="submit">
					Sign in
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignInPage;
