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
  on(addCard, (state, {card}) => {
    return {
      ...state,
      favorites: [...state.favorites, card]
    }
  }),
  on(removeCard, (state, {id}) => {
    const newArr = [...state.favorites].filter(item=> item.id !== id)
    return {
      ...state,
      favorites: newArr
    }
  }),
);