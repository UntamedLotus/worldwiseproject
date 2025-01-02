import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import { ICityItem } from "../Types";
import { CitiesContextType } from "../Types/contextTypes";

const CitiesContext = createContext<CitiesContextType | undefined>(undefined);

const BASE_URL = "http://localhost:9000";

interface CitiesProviderProps {
	children: ReactNode;
}

const CitiesProvider = ({ children }: CitiesProviderProps) => {
	const [cities, setCities] = useState<ICityItem[]>([]);
	const [currentCity, setCurrentCity] = useState<ICityItem>();

	useEffect(() => {
		const fetchCities = async () => {
			try {
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch {
				alert("There was an error loading data...");
			}
		};

		fetchCities();
	}, []);

	const getCity = async (id: string | number) => {
		try {
			const res = await fetch(`${BASE_URL}/cities/${id}`);
			const data = await res.json();
			setCurrentCity(data);
		} catch {
			alert("There was an error loading data...");
		}
	};

	return (
		<CitiesContext.Provider value={{ cities, currentCity, getCity }}>
			{children}
		</CitiesContext.Provider>
	);
};

const useCities = (): CitiesContextType => {
	const context = useContext(CitiesContext);
	if (!context) {
		throw new Error("useCities must be used within a CitiesProvider");
	}
	return context;
};

export { CitiesProvider, useCities };
