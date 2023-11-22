import React from "react";
import { CheckBox } from "./checkbox";

const Term = () => {
	return (
		<div className="gap-x-5 flex items-start mb-5">
			<CheckBox name="term">
				<p className="lg:text-sm text-text2 dark:text-text3 flex-1 text-xs">
					I agree to the
					<span className="text-secondary underline"> Terms of Use</span> and
					have read and understand the
					<span className="text-secondary underline"> Privacy policy.</span>
				</p>
			</CheckBox>
		</div>
	);
};

export default Term;
