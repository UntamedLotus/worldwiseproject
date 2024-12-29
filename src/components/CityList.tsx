import React from "react";
import { ICityItem } from "../Types";
import moment from "moment";
import { CloseIcon } from "../assets";
import { Link } from "react-router-dom";

const CityList = ({ cities }: { cities: ICityItem[] }) => {
	if (!cities?.length)
		return (
			<p className='text-center mt-16 text-lg text-white'>
				Add your first city by clicking on a city on the map.
			</p>
		);

	return (
		<div className='text-white space-y-5 mt-10 text-lg'>
			{cities?.map((c) => (
				<Link
					key={c?.id}
					to={`${c?.id}?lat=${c?.position?.lat}&lng=${c?.position?.lng}`}
					className='border border-green-500 border-l-4 rounded-lg flex items-center justify-between bg-slate-700 p-4'
				>
					<section className='flex items-center gap-4'>
						<span>{c?.emoji}</span>
						<p>{c?.cityName}</p>
					</section>

					<section className='flex items-center gap-2'>
						<p>{moment(c?.date)?.format("( MMMM DD, YYYY )")}</p>
						<button type='button'>
							<CloseIcon className='h-5 w-5 text-white' />
						</button>
					</section>
				</Link>
			))}
		</div>
	);
};

export default CityList;
