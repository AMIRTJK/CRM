import { Form } from "../../../UI/Form/Form";
import "./Logme.css";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../API/services/hooks/useAuth";
// RTQ
const Logme: React.FC = () => {
	const { logMe } = useAuth();
	const logMeMutation = useMutation({
		mutationFn: () => logMe(data),
		onSuccess: () => console.log(`Успешно`),
	});

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
