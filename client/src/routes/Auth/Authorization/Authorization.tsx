import { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation, Outlet } from "react-router";
import "./Authorization.css";

// Lazy
const Authorization: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const isRegme = location.pathname === "/auth/regme";
	const handleSelect = () => {
		navigate(isRegme ? "/auth/logme" : "/auth/regme");
	};

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/auth/logme");
		}
	}, [location.pathname === "/"]);
	return (
		<>
			{/* Доработать КМ */}
			<div className="authorization__content">
				<div className="authorization__choose">
					<Button onClick={handleSelect}>
						{isRegme ? `Войти` : `Зарегистрироваться`}
					</Button>
				</div>
				<div className="authorization__components">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Authorization;
