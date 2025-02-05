export interface FormProps {
	input: { name: string; type?: string; placeholder?: string; classname }[];
	classname?: string;
	onsubmit: (data) => void;
	sbtName: string;
}

export const Form: React.FC<FormProps> = ({ input, classname, onsubmit,sbtName }) => {
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
				<button>{sbtName || "Отправить"}</button>
			</form>
		</>
	);
};
