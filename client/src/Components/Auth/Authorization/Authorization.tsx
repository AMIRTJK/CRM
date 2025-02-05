import { Suspense, lazy } from "react";
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
					<Suspense>
						<Outlet />
					</Suspense>
				</div>
			</div>
		</>
	);
};

export default Authorization;
