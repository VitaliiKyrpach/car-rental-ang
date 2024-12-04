import { CatalogEffects } from "./effects";
import { catalogReducer } from "./reducer";

export const store = {
    catalog: catalogReducer
}
export const effects = [CatalogEffects]