import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitState } from "./reducer";

export const selectFeatureCatalog = createFeatureSelector<InitState>('catalog')
export const selectCatalog = createSelector(selectFeatureCatalog, state=> state.items)
export const selectFavorites = createSelector(selectFeatureCatalog, state => state.favorites)