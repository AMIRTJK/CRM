import { Suspense, useState, lazy } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import "./Authorization.css";

// Lazy
const LazyLogme = lazy(() => import("../Logme/Logme"));
const LazyRegme = lazy(() => import("../Regme/Regme"));
export const Authorization: React.FC = () => {
	const [auth, setAuth] = useState<string>("logme");

	const handleSelect = (authState: string) => {
		setAuth(authState);
		console.log(auth);
	};

	return (
		<>
			{/* Доработать КМ */}
			<div className="authorization__content">
				<div className="authorization__choose">
					<Button
						onClick={() => handleSelect(auth === "logme" ? "regme" : "logme")}
					>
						{auth === "regme" ? "Зарегистрироваться" : "Войти"}
					</Button>
				</div>
				<div className="authorization__components">
					<Suspense>
						{auth === "regme" ? <LazyLogme /> : <LazyRegme />}
					</Suspense>
				</div>
			</div>
		</>
	);
};
