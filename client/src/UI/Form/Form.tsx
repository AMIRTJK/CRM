import { Button } from "@mui/material";
export interface FormProps {
	input: {
		name: string;
		type?: string;
		placeholder?: string;
		classname: string;
	}[];
	classname?: string;
	onsubmit: (data: React.FormEvent) => void;
	sbtName: string;
	btnClassname?: string;
}

export const Form: React.FC<FormProps> = ({
	input,
	classname,
	onsubmit,
	sbtName,
	btnClassname,
}) => {
	return (
		<>
			<form className={classname} onSubmit={onsubmit}>
				{input?.map(({ name, type, placeholder, classname }) => (
					<>
						<input
							name={name}
							type={type}
							className={classname}
							placeholder={placeholder}
						/>
					</>
				))}
				<Button type="submit" className={btnClassname}>
					{sbtName || "Отправить"}
				</Button>
			</form>
		</>
	);
};
