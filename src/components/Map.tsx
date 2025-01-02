import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const Map = () => {
	// const navigate = useNavigate();
	// const [searchParams, setSearchParams] = useSearchParams();

	const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0]);

	return (
		<div className='mapContainer'>
			<MapContainer
				center={mapPosition}
				zoom={13}
				scrollWheelZoom={false}
				className='map'
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={mapPosition}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
