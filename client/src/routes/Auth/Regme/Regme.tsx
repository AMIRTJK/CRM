import { Button } from "@mui/material";
// import { createUser } from "../../../API/services/users/createUser";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../queryClient";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../API/services/hooks/useAuth";
import { Form } from "../../../UI/Form/Form";

import "./Regme.css";
import "../../../App.css";
// RTQ
const Regme: React.FC = () => {
	const { regMe } = useAuth();
	const logMeMutation = useMutation({
		mutationFn: () => regMe(data),
		onSuccess: () => console.log(`Успешно`),
	});

	const newUser = {
		login: "Amir",
	};

	const createUserMutate = useMutation(
		{
			mutationFn: () => createUser(newUser),
			onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
		},
		queryClient,
	);

	const onSubmit = () => {
		createUserMutate.mutate();
	};

	// Regme sbt
	const handleRegme = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
	};

	return (
		<>
			<Form
				classname="regme__form"
				input={[
					{
						name: "login",
						type: "text",
						placeholder: "Логин",
						classname: "input regme__input",
					},
					{
						name: "password",
						type: "password",
						placeholder: "Введите пароль",
						classname: "input regme__input",
					},
				]}
				sbtName="Зарегистрироваться"
				btnClassname="btn-mui regme__sbt"
				onsubmit={handleRegme}
			></Form>
		</>
	);
};

export default Regme;
