import React from "react";
import Images from "../assets";
import PageNav from "../components/PageNav";

const HomePage = () => {
	return (
		<main
			style={{
				backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.8),rgba(36, 42, 46, 0.8)), url(${Images.HomeBgImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className='h-full w-full p-10 text-white grid grid-rows-[15%_auto]'
		>
			<PageNav />

			<section className='flex flex-col items-center justify-center text-center space-y-10'>
				<header className='font-bold text-6xl w-[55%] space-y-5'>
					<p>You travel the world.</p>
					<p>
						WorldWise keeps track of your <br />
					</p>
					<p>adventures.</p>
				</header>
				<h2 className='text-lg w-[60%]'>
					A world map that tracks your footsteps into every city you
					can think of. Never forget your wonderful experiences, and
					show your friends how you have wandered the world.
				</h2>
				<button
					type='button'
					className='bg-green-400 text-black px-6 py-2 shadow-2xl rounded-md'
				>
					START TRACKING NOW
				</button>
			</section>
		</main>
	);
};

export default HomePage;
