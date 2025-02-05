import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import { Loader } from "./Components/UI/Loader/Loader";
const LazyHeader = lazy(() => import("./Components/Header/Header"));
const LazyAuthrozation = lazy(
	() => import("./Components/Auth/Authorization/Authorization"),
);
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
								<Route path="/" element={<LazyCrm />} />
								{/* Доработать КМ */}
								<Route path="auth/*" element={<LazyAuthrozation />}>
									<Route path="regme" element={<LazyRegMe />} />
									<Route path="logme" element={<LazyLogMe />} />
								</Route>
								<Route path="*" element={<h2>Страница не существует</h2>} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
