import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Pricing from "../Pages/Pricing";
import Product from "../Pages/Product";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='product' element={<Product />} />
			<Route path='pricing' element={<Pricing />} />
		</Routes>
	);
};

export default AppRoutes;
