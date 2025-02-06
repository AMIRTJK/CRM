import { Form } from "../../../UI/Form/Form";
import "./Logme.css";
import { useMutation } from "@tanstack/react-query";
// RTQ
const Logme: React.FC = () => {
	const handleLogMe = () => {
		console.log(`ds`);
	};

	return (
		<>
			<Form
				classname="logme__form"
				input={[
					{
						name: "username",
						type: "text",
						placeholder: "Введите ИНН",
						classname: "input logme__input",
					},
					{
						name: "password",
						classname: `input logme__input`,
						type: "password",
						placeholder: "Введите пароль",
					},
				]}
				sbtName="Войти"
				onsubmit={handleLogMe}
				btnClassname="btn"
			></Form>
		</>
	);
};
export default Logme;
