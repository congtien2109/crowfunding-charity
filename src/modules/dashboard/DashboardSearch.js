import React from "react";

const DashboardSearch = () => {
	return (
		<div className="relative z-50">
			<div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full flex items-center ">
				<div className="flex-1 px-5">
					<input
						type="text"
						placeholder="Do fundrise now"
						className="placeholder:text-text4 text-text1 w-full text-sm bg-transparent"
					/>
				</div>
				<button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			<div className="search-results w-[843px] absolute top-full left-0 bg-white z-50 translate-y-5 pb-6 rounded-3xl">
				<div className="bg-graySoft rounded-3xl flex items-center justify-between p-3">
					<span className="pl-4 text-sm font-medium">
						See all 10,124 fundraisier
					</span>
					<button className="flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error">
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DashboardSearch;
