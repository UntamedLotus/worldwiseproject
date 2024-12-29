import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div onClick={() => navigate("form")}>
			<h1>Map</h1>
			<h1>
				position:{lat} , {lng}
			</h1>
			<button
				type='button'
				onClick={() => setSearchParams({ lat: "23", lng: "50" })}
			>
				Change position
			</button>
		</div>
	);
};

export default Map;
