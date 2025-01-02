import { ICityItem } from ".";

export type CitiesContextType = {
	cities: ICityItem[];
	currentCity?: ICityItem;
	getCity: (id: string | number) => void;
};
