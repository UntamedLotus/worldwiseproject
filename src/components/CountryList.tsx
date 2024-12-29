import React from "react";
import { ICityItem } from "../Types";
import moment from "moment";
import { CloseIcon } from "../assets";

const CountryList = ({ cities }: { cities: ICityItem[] }) => {
	if (!cities?.length)
		return (
			<p className='text-center mt-16 text-lg text-white'>
				Add your first city by clicking on a city on the map.
			</p>
		);

	const countries = cities?.reduce<{ country: string; emoji: string }[]>(
		(arr, city) => {
			if (!arr.map((el) => el.country).includes(city.country)) {
				return [...arr, { country: city.country, emoji: city.emoji }];
			}
			return arr;
		},
		[]
	);

	return (
		<div className='text-white mt-10 text-lg grid grid-cols-3 items-center gap-5'>
			{countries?.map((c, i) => (
				<section
					key={i + 1}
					className='bg-slate-700 p-2 flex flex-col items-center justify-center border-yellow-600 w-full h-full border-l-4 rounded-md'
				>
					<p>{c?.emoji}</p>
					<p>{c?.country}</p>
				</section>
			))}
		</div>
	);
};

export default CountryList;
