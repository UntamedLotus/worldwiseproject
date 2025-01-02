import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing";
import Product from "../Pages/Product";
import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import { CitiesProvider } from "../contexts/CitiesProvider";
import City from "../components/City";

const AppRoutes = () => {
	return (
		<CitiesProvider>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='product' element={<Product />} />
				<Route path='pricing' element={<Pricing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/app' element={<AppLayout />}>
					<Route index element={<Navigate replace to='cities' />} />
					<Route path='cities' element={<CityList />} />
					<Route path='cities/:id' element={<City />} />
					<Route path='countries' element={<CountryList />} />
					<Route path='form' element={<p>Form</p>} />
				</Route>
			</Routes>
		</CitiesProvider>
	);
};

export default AppRoutes;
