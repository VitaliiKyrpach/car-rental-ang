import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CatalogService } from "../services/service.service";
import { getCards, getCardsFail, getCardsSuccess } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CatalogEffects {
    private actions$ = inject(Actions);
constructor(private service: CatalogService){}

    loadCars$ = createEffect(()=> this.actions$.pipe(
        ofType(getCards),
        switchMap(()=>this.service.getCars().pipe(
            map(cards=>getCardsSuccess({cards})),
        catchError(error => of(getCardsFail({error})))))
    ))
}