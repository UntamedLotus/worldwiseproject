import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import HomePage from "./Pages/HomePage";

const AppRoutes = () => {
	const location = useLocation();
	console.log(location.pathname); // Now this will work
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='product' element={<Product />} />
			<Route path='pricing' element={<Pricing />} />
		</Routes>
	);
};

export const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
