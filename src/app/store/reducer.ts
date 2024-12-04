import { createReducer, on } from '@ngrx/store';
import { Card } from '../components/interface/interface';
import { addCard, getCardsSuccess, removeCard } from './actions';

export interface InitState {
	items: Card[];
	favorites: Card[];
	isLoading: Boolean;
	error: null | string | undefined;
}

export const initialState: InitState = {
    items: [],
	favorites: [],
	isLoading: false,
	error: null,
};

export const catalogReducer = createReducer(
  initialState,
  on(getCardsSuccess, (state, {cards}) => {
    return {
        ...state, 
        items: cards
    }
  }  ),
  on(addCard, (state) => state),
  on(removeCard, (state) => state),
);