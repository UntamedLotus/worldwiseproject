import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesProvider";

const City = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const { getCity, currentCity } = useCities();

	useEffect(() => {
		if (id) {
			getCity(id);
		}
	}, [id]);

	return (
		<div className='rounded-2xl bg-gray-700 mt-10 p-10 space-y-5 text-white'>
			<div>
				<h6 className='text-gray-400 uppercase text-sm font-semibold'>
					City name
				</h6>
				<h3 className='text-3xl'>
					<span>{currentCity?.emoji}</span> {currentCity?.cityName}
				</h3>
			</div>

			<div>
				<h6 className='text-gray-400 uppercase text-sm font-semibold'>
					You went to {currentCity?.cityName} on
				</h6>
				<p className='text-lg'>
					{moment(currentCity?.date).format("dddd, MMM DD, YYYY")}
				</p>
			</div>

			{currentCity?.notes && (
				<div>
					<h6 className='text-gray-400 uppercase text-sm font-semibold'>
						Your notes
					</h6>
					<p className='text-lg'>{currentCity?.notes}</p>
				</div>
			)}

			<div>
				<h6 className='text-gray-400 uppercase text-sm font-semibold'>
					Learn more
				</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`}
					target='_blank'
					rel='noreferrer'
					className='text-yellow-600 underline'
				>
					Check out {currentCity?.cityName} on Wikipedia &rarr;
				</a>
			</div>

			<footer>
				<button
					type='button'
					className='border py-1 px-4'
					onClick={() => navigate(-1)}
				>
					&larr; Back
				</button>
			</footer>
		</div>
	);
};

export default City;
