import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
	return (
		<button
			onClick={onClick}
			className="gap-x-3 dark:text-white dark:border-darkStroke border-strock rounded-xl flex items-center justify-center w-full py-4 mb-5 text-base border"
		>
			<img srcSet="/icon-google.png 2x" alt="icon-google" />

			<span className="text-text2 dark:text-white text-sm font-semibold">
				{text}
			</span>
		</button>
	);
};
ButtonGoogle.propTypes = {
	text: PropTypes.string,
	onCLick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
	FallbackComponent: ErrorComponent,
});
