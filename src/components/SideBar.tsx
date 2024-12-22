import React from "react";
import Images from "../assets";
import AppNav from "../components/AppNav";
import moment from "moment";

const SideBar = () => {
	return (
		<div>
			<h1>SideBar</h1>
			<img
				src={Images.WorldWise_Logo}
				alt='worldwise logo'
				className='h-20 w-80'
			/>
			<AppNav />

			<footer className=''>
				<p className=''>
					&copy; Copyright {moment().year()} by WorldWise Inc.
				</p>
			</footer>
		</div>
	);
};

export default SideBar;
