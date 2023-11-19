import React from "react";
import { useController } from "react-hook-form";

const TextArea = (props) => {
	const { control, name, placeholder = "", children, ...rest } = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<textarea
			className="rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white w-full px-6 py-4 text-sm font-medium resize-none min-h-[140px] outline-none bg-transparent border"
			placeholder={placeholder}
			{...field}
			{...rest}
		></textarea>
	);
};

export default TextArea;
