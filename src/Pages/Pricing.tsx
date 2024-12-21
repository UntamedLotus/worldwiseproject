import React from "react";
import PageNav from "../components/PageNav";
import Images from "../assets";

const Pricing = () => {
	return (
		<main className='h-full w-full p-10 text-white grid grid-rows-[15%_auto] bg-gray-800'>
			<PageNav />
			<section className='grid grid-cols-2 items-center'>
				<div className='w-[70%] space-y-10 pl-24'>
					<h2 className='font-bold text-5xl leading-relaxed'>
						Simple pricing.
						<br />
						Just $9/month.
					</h2>
					<p className='text-lg leading-8'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Vitae vel labore mollitia iusto. Recusandae quos
						provident, laboriosam fugit voluptatem iste.
					</p>
				</div>
				<section className='flex items-center justify-center'>
					<img
						src={Images.CityScapeImg}
						alt='overview of a large city with skyscrapers'
						className='w-[50wh] h-[50vh]'
					/>
				</section>
			</section>
		</main>
	);
};

export default Pricing;
