import { Suspense, useState, lazy } from "react";
import { Button } from "@mui/material";

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
			<div className="Authorization__content">
				<div className="authorization__choose">
					<Button
						onClick={() => handleSelect(auth === "logme" ? "regme" : "logme")}
					>
						{auth === "regme" ? "Зарегистрироваться" : "Войти"}
					</Button>
				</div>
				<div className="authorization__components">
					<Suspense>
						{auth === "regme" ? <LazyRegme /> : <LazyLogme />}
					</Suspense>
				</div>
			</div>
		</>
	);
};
