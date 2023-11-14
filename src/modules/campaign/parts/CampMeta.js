import React from "react";
import classNames from "utils/classNames";

const CampMeta = ({
	amount = "$2,000",
	text = "Raised of $1,900",
	size = "small",
}) => {
	return (
		<div className="gap-y-1 flex flex-col">
			<h4
				className={classNames(
					"text-text2 text-sm font-semibold",
					size === "small" ? "text-sm" : "text-xl"
				)}
			>
				{amount}
			</h4>
			<span
				className={classNames(
					"text-text4 text-xs",
					size === "small" ? "text-xs" : "text-base"
				)}
			>
				{text}
			</span>
		</div>
	);
};

export default CampMeta;
