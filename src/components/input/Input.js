import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const Input = (props) => {
	const {
		control,
		name,
		type = "text",
		error = "",
		placeholder = "",
		children,
		...rest
	} = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<div className="relative">
			<input
				id={name}
				type={type}
				className={` rounded-xl text-text1 placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white w-full px-6 py-4 text-sm font-medium border ${
					error.length > 0
						? "border-error text-error"
						: "border-strock text-text1 dark:border-darkStroke"
				} ${children ? "pr-16" : ""}`}
				placeholder={error.length <= 0 ? placeholder : ""}
				{...rest}
				{...field}
			/>
			{error.length > 0 && (
				<span className="error-input text-error top-2/4 -translate-y-2/4 left-6 absolute text-sm font-medium">
					{error}
				</span>
			)}
			{children && (
				<span className="right-6 top-2/4 -translate-y-2/4 absolute cursor-pointer select-none">
					{children}
				</span>
			)}
		</div>
	);
};
Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	control: PropTypes.any.isRequired,
	error: PropTypes.string,
};
export default withErrorBoundary(Input, {
	FallbackComponent: ErrorComponent,
});
