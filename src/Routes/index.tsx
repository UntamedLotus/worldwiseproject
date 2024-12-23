import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Pricing from "../Pages/Pricing";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import AppLayout from "../Pages/AppLayout";
import CityList from "../components/CityList";

const BASE_URL = "http://localhost:9000";

const AppRoutes = () => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		const fetchCities = async () => {
			const res = await fetch(`${BASE_URL}/cities`);
			const data = await res.json();
			setCities(data);
		};
		try {
			fetchCities();
		} catch {
			alert("There was an error loading data...");
		}
	}, []);

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='product' element={<Product />} />
			<Route path='pricing' element={<Pricing />} />
			<Route path='/login' element={<Login />} />
			<Route path='/app' element={<AppLayout />}>
				<Route index element={<CityList />} />
				<Route path='cities' element={<CityList />} />
				<Route path='countries' element={<p>List Of Countries</p>} />
				<Route path='form' element={<p>Form</p>} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
