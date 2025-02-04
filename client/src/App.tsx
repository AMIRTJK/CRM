import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import { Loader } from "./Components/UI/Loader/Loader";
import { Authorization } from "./Components/Auth/Authorization/Authorization";
const LazyHeader = lazy(() => import("./Components/Header/Header"));

function App() {
	return (
		<>
			<section className="section-offset">
				<div className="container">
					<div className="app__content">
						<Suspense fallback={<Loader />}>
							<Routes>
								<Route path="/" element={<LazyHeader />} />
								<Route path="*" element={<h2>Страница не существует</h2>} />
							</Routes>
						</Suspense>
						<Authorization />
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
