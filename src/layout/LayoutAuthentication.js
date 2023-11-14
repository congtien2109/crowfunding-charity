import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
	const { children, heading = "" } = props;
	return (
		<div className="bg-lite isolate dark:bg-darkbg relative w-full min-h-screen p-10">
			<img
				src="/ellipse.png"
				alt="bg"
				className="z-[-1] absolute right-0 w-full hidden lg:block left-0 bottom-0 pointer-events-none"
			/>
			<Link to="/" className="lg:mb-16 inline-block mb-5">
				<img srcSet="/logo.png 2x" alt="crowfunding-app" />
			</Link>
			<div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto ">
				<h1 className="text-text1 lg:text-xl lg:mb-3 dark:text-white mb-1 text-lg font-semibold text-center">
					{heading}
				</h1>
				{children}
			</div>
		</div>
	);
};
LayoutAuthentication.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
	FallbackComponent: ErrorComponent,
});
