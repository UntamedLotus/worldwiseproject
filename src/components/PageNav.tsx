import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets";

const PageNav = () => {
	return (
		<nav>
			<ul className='grid grid-cols-[30%_auto] text-white uppercase font-semibold'>
				<li className='flex items-center gap-10'>
					<img
						src={Images.WorldWise_Logo}
						alt='worldwise logo'
						className='h-20 w-36'
					/>
				</li>
				<section className='flex items-center justify-end gap-10'>
					{" "}
					<li>
						<Link to='/product'>Product</Link>
					</li>
					<li>
						<Link to='/pricing'>Pricing</Link>
					</li>
					<li className='text-black bg-green-400 py-2 px-6 rounded-md'>
						<Link to='/'>Log in</Link>
					</li>
				</section>
			</ul>
		</nav>
	);
};

export default PageNav;
