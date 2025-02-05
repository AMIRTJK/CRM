import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import { Loader } from "./UI/Loader/Loader";
const LazyHeader = lazy(() => import("./components/Header/Header"));
const LazyAuthrozation = lazy(
	() => import("./routes/Auth/Authorization/Authorization"),
);
const LazyLogMe = lazy(() => import("./routes/Auth/Logme/Logme"));
const LazyRegMe = lazy(() => import("./routes/Auth/Regme/Regme"));
const LazyCrm = lazy(() => import("./routes/CRM/Crm"));

function App() {
	return (
		<>
			<section className="section-offset">
				<div className="container">
					<div className="app__content">
						<Suspense fallback={<Loader />}>
							<LazyHeader />
							<Routes>
								<Route path="/crm" element={<LazyCrm />} />
								{/* Доработать КМ */}
								<Route path="/" element={<LazyAuthrozation />} />
								<Route path="/auth" element={<LazyAuthrozation />}>
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
