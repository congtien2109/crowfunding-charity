import useToggleValue from "hooks/UseToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { CheckBox } from "components/checkbox";
import { Button } from "components/button";
const schema = yup
	.object({
		name: yup.string().required("This field is required"),
		email: yup
			.string()
			.email("Invalid email address")
			.required("This field is required"),
		password: yup
			.string()
			.required("This field is required")
			.min(8, "Password must be 8 character"),
	})
	.required();
const SignUpPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit",
	});
	const handleSignUp = (values) => {
		console.log(values);
	};
	const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
		useToggleValue();
	const { value: showPassword, handleToggleValue: handleTogglePassword } =
		useToggleValue();

	return (
		<LayoutAuthentication heading="Sign Up">
			<p className="lg:text-sm text-text3 lg:mb-8 mb-6 text-xs font-normal text-center">
				Already have an account?{" "}
				<Link to="/sign-in" className="text-primary font-medium underline">
					Sign in
				</Link>
			</p>
			<button className="gap-x-3 dark:text-white dark:border-darkStroke border-strock rounded-xl flex items-center justify-center w-full py-4 mb-5 text-base border">
				<img srcSet="/icon-google.png 2x" alt="icon-google" />
				<span className="text-text2 dark:text-white text-sm font-semibold">
					Sign up with google
				</span>
			</button>
			<p className="lg:text-sm lg:mb-8 text-text2 dark:text-white mb-4 text-xs font-normal text-center">
				Or sign up with email
			</p>
			<form onSubmit={handleSubmit(handleSignUp)}>
				<FormGroup>
					<Label htmlFor="name">Full Name *</Label>
					<Input
						control={control}
						name="name"
						placeholder="John Doe"
						error={errors.name?.message}
					></Input>
				</FormGroup>
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
						placeholder="Create a password"
						error={errors.password?.message}
					>
						<IconEyeToggle
							open={showPassword}
							onClick={handleTogglePassword}
						></IconEyeToggle>
					</Input>
				</FormGroup>
				<div className="gap-x-5 flex items-start mb-5">
					<CheckBox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
						<p className="text-text2 dark:text-text3 lg:text-sm flex-1 text-xs">
							I agree to the{" "}
							<span className="text-secondary underline">Terms of Use</span> and
							have read and understand the{" "}
							<span className="text-secondary underline">Privacy policy.</span>
						</p>
					</CheckBox>
				</div>
				<Button className="w-full" kind="primary" type="submit">
					Create my account
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignUpPage;
