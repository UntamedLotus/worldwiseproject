import React from "react";
import PageNav from "../components/PageNav";
import Images from "../assets";

const Product = () => {
	return (
		<main className='h-full w-full p-10 text-white grid grid-rows-[15%_auto] bg-gray-800'>
			<PageNav />
			<section className='grid grid-cols-2 items-center'>
				<section className='flex items-center justify-center'>
					<img
						src={Images.ProductBgImg}
						alt='person with dog overlooking mountain with sunset'
						className='w-[50wh] h-[50vh]'
					/>{" "}
				</section>
				<div className='w-[70%] space-y-10 pl-24'>
					<h2 className='font-bold text-5xl leading-relaxed'>
						About WorldWide.
					</h2>
					<p className='text-lg leading-8'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Illo est dicta illum vero culpa cum quaerat architecto
						sapiente eius non soluta, molestiae nihil laborum,
						placeat debitis, laboriosam at fuga perspiciatis?
					</p>
					<p className='text-lg leading-8'>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Corporis doloribus libero sunt expedita ratione
						iusto, magni, id sapiente sequi officiis et.
					</p>
				</div>
			</section>
		</main>
	);
};

export default Product;
