import { Button } from "@mui/material";
// RTQ
const Logme: React.FC = () => {
	return (
		<>
			<h2>Logme</h2>
			<form action="" className="logme__form">
				<input type="text" className="logme__input" />
				<input type="text" className="logme__input" />
				<Button>Войти</Button>
			</form>
		</>
	);
};
export default Logme;
