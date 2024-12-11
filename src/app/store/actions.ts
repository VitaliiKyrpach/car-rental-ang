import { createAction, props } from '@ngrx/store';
import { Card } from '../components/interface/interface';

export const getCards = createAction(
    '[Catalog] Get Cards'
)
export const getCardsSuccess = createAction(
    '[Catalog] Get CardsSuccess',
    props<{cards: Card[]}>()
)
export const getCardsFail = createAction(
    '[Catalog] Get CardsFail',
    props<{error: any}>()
) 
export const addCards = createAction('[Catalog] Add Cards', props<{favArr: Card[]}>())
export const addCard = createAction(
  '[Catalog] Add Card',
  props<{ card: Card }>()
);
export const removeCard = createAction(
    '[Catalog] Remove Card', 
    props<{id: number}>()
)