import React from "react";
import Images from "../assets";
import AppNav from "../components/AppNav";
import moment from "moment";
import { Outlet } from "react-router-dom";

const SideBar = () => {
	return (
		<div className='bg-gray-800 grid grid-rows-[10%_auto_5%] px-10 py-5'>
			<img
				src={Images.WorldWise_Logo}
				alt='worldwise logo'
				className='h-15 w-60 mx-auto'
			/>
			<main className='py-5'>
				<AppNav />

				<Outlet />
			</main>

			<footer className='flex items-center justify-center text-white text-sm'>
				<p className=''>
					&copy; Copyright {moment().year()} by WorldWise Inc.
				</p>
			</footer>
		</div>
	);
};

export default SideBar;
