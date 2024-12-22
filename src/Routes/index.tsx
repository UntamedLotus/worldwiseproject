import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Pricing from "../Pages/Pricing";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import AppLayout from "../Pages/AppLayout";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='product' element={<Product />} />
			<Route path='pricing' element={<Pricing />} />
			<Route path='/login' element={<Login />} />
			<Route path='/app' element={<AppLayout />} />
		</Routes>
	);
};

export default AppRoutes;
