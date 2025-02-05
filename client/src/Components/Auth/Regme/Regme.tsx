import { Button } from "@mui/material";
import { createUser } from "../../../API/users/createUser";
import { QueryClient, useMutation } from "@tanstack/react-query";
import "./Regme.css";
// RTQ
const Regme: React.FC = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: true,
				retry: 0,
			},
		},
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

	return (
		<>
			<form className="regme__form">
				<input type="text" className="regme__input" />
				<input type="text" className="regme__input" />
				<input type="text" className="regme__input" />
				<Button onClick={onSubmit}>Зарегистрироваться</Button>
			</form>
		</>
	);
};

export default Regme;
