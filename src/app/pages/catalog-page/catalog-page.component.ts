import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from '../../components/filters/filters.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';
import { Store } from '@ngrx/store';
import { Card } from '../../components/interface/interface';
import { selectCatalog, selectLoader } from '../../store/selectors';
import { Observable } from 'rxjs';
import { getCards } from '../../store/actions';
import { LoaderComponent } from '../../components/loader/loader.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [FiltersComponent, CatalogComponent, LoaderComponent, AsyncPipe],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent implements OnInit {
  public cars$!: Observable<Card[]>
  public isLoading$!: Observable<boolean>
  constructor(private store: Store){}
  
  ngOnInit(): void {
    // this.store.select(selectLoader).subscribe(loading=> this.isLoading = loading)
    this.isLoading$ = this.store.select(selectLoader)
    this.cars$ = this.store.select(selectCatalog)
    this.cars$.subscribe(data=> {
      if(!data.length){
        this.store.dispatch(getCards())
      }
      console.log(data)})
  }

}
