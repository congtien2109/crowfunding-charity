import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
	const { control } = useForm();
	return (
		<div>
			<h2 className="mb-5 text-lg font-semibold">Support</h2>
			<div className="shadow-1 py-7 flex flex-col w-full px-6 bg-white">
				<p className="text-text3 mb-8 text-xl text-center">
					Pledge without reward
				</p>
				<Input
					placeholder="$10"
					control={control}
					name="Pledge"
					className="border-strock w-full px-5 py-3 mb-5 text-lg font-medium border rounded"
				></Input>
				<div className="bg-grayf3 rounded-xl p-5 mb-5">
					<p className="text-text2 mb-5 text-sm font-semibold">
						Back it because you believe in it.
					</p>
					<p className="text-text3 text-sm">
						Support the project for no reward, just because it speaks to you.
					</p>
				</div>
				<Button className="bg-secondary w-full text-white">Continue</Button>
			</div>
		</div>
	);
};

export default CampaignSupport;
