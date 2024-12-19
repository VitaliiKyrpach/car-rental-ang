import { createReducer, on } from '@ngrx/store';
import { InitState } from '../components/interface/interface';
import { addCard, addCards, getCards, getCardsSuccess, removeCard, setFilters } from './actions';


export const initialState: InitState = {
    items: [],
	favorites: [],
  filters: {
    brand: '',
  price: '',
  from: '',
  to: ''
  },
	isLoading: false,
	error: null,
};

export const catalogReducer = createReducer(
  initialState,
  on(getCards, state=>{
    return {
      ...state,
      isLoading: true
    }
  }), 
  on(getCardsSuccess, (state, {cards}) => {
    return {
        ...state,
        isLoading: false,
        items: cards
    }
  }  ),
  on(addCards, (state, {favArr})=>{
    return {...state, 
      favorites: favArr
    }
  }),
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
  on(setFilters, (state, {filters})=>{
    return {
      ...state,
      filters: filters
    }
  })
);