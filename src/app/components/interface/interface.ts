import { FormControl } from "@angular/forms";

export interface Card {
	id: number;
	year: number;
	make: string;
	model: string;
	type: string;
	img: string;
	description: string;
	fuelConsumption: string;
	engineSize: string;
	accessories: string[];
	functionalities: string[];
	rentalPrice: string;
	rentalCompany: string;
	address: string;
	rentalConditions: string;
	mileage: number;
}

export interface Filters{
	brand: string;
	price: string;
	from: string;
	to: string
  }
  
  export interface InitState {
	items: Card[];
	favorites: Card[];
	filters: Filters;
	isLoading: boolean;
	error: null | string | undefined;
  }
export interface FilterGroup {
	brand: FormControl<string>;
	price: FormControl<string>;
	from: FormControl<string>;
	to: FormControl<string>;
  }