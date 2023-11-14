import React from "react";

const FormGroup = ({ children }) => {
	return (
		<div className="gap-y-2 lg:gap-y-3 lg:mb-5 gap flex flex-col mb-4">
			{children}
		</div>
	);
};

export default FormGroup;
