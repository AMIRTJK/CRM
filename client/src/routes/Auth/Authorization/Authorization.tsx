import { Suspense, lazy } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation, Outlet } from "react-router";
import "./Authorization.css";
import Regme from "../Regme/Regme";

// Lazy
const LazyLogme = lazy(() => import("../Logme/Logme"));
const LazyRegme = lazy(() => import("../Regme/Regme"));
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
					<Suspense>{Regme ? <LazyLogme /> : <LazyRegme />}</Suspense>
				</div>
			</div>
		</>
	);
};

export default Authorization;
