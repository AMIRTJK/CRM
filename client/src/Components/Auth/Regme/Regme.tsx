import { Button } from "@mui/material";
// RTQ
const Regme: React.FC = () => {
	return (
		<>
			<form className="regme__form">
				<input type="text" className="regme__input" />
				<input type="text" className="regme__input" />
				<input type="text" className="regme__input" />
				<Button>Зарегистрироваться</Button>
			</form>
		</>
	);
};

export default Regme;
