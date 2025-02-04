import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import { Loader } from "./Components/UI/Loader/Loader";
import { Authorization } from "./Components/Auth/Authorization/Authorization";
const LazyHeader = lazy(() => import("./Components/Header/Header"));
const LazyLogMe = lazy(() => import("./Components/Auth/Logme/Logme"));
const LazyRegMe = lazy(() => import("./Components/Auth/Regme/Regme"));
const LazyCrm = lazy(() => import("./Components/CRM/Crm"));

function App() {
	return (
		<>
			<section className="section-offset">
				<div className="container">
					<div className="app__content">
						<Suspense fallback={<Loader />}>
							<LazyHeader />
							<Routes>
								<Route path="/" element={<LazyCrm />} />
								<Route path="auth/regme" element={LazyRegMe} />
								<Route path="auth/logme" element={LazyLogMe} />
								<Route path="*" element={<h2>Страница не существует</h2>} />
							</Routes>
						</Suspense>
						<Authorization /> // Для теста
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
