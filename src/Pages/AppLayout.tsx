import React from "react";
import SideBar from "../components/SideBar";
import Map from "../components/Map";

const AppLayout = () => {
	return (
		<div className='grid grid-cols-[40%_auto] h-full w-full'>
			<SideBar />
			<Map />
		</div>
	);
};

export default AppLayout;
