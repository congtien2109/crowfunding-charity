import React from "react";

const CheckBox = ({
	checked = false,
	onClick = () => {},
	name = "",
	children,
}) => {
	return (
		<div className="gap-x-5 flex items-start">
			<div
				className={` inline-flex items-center text-white justify-center p-1 w-5 h-5 border rounded cursor-pointer ${
					checked
						? "bg-primary border-primary"
						: "border-strock dark:border-text3"
				}`}
				onClick={onClick}
			>
				<input type="checkbox" className="hidden" name={name} />
				<span className={checked ? "" : "opacity-0 invisible"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				</span>
			</div>
			{children && (
				<div
					className="text-text3 font-medium cursor-pointer"
					onClick={onClick}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default CheckBox;
