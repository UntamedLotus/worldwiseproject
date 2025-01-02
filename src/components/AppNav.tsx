import React from "react";
import { NavLink } from "react-router-dom";

const AppNav = () => {
	return (
		<nav>
			<ul className='text-white flex items-center justify-center uppercase font-semibold text-sm'>
				<li>
					<NavLink
						to='cities'
						className={({ isActive }) =>
							`text-white py-2 px-5 rounded-l-md ${
								isActive
									? "bg-gray-900 rounded-md"
									: "bg-gray-700"
							}`
						}
					>
						Cities
					</NavLink>
				</li>
				<li>
					<NavLink
						to='countries'
						className={({ isActive }) =>
							`text-white py-2 px-5 rounded-r-md ${
								isActive ? "bg-gray-900 " : "bg-gray-700 "
							}`
						}
					>
						Countries
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default AppNav;
