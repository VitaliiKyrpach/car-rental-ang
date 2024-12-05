import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from '../../components/filters/filters.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';
import { Store } from '@ngrx/store';
import { Card } from '../../components/interface/interface';
import { selectCatalog } from '../../store/selectors';
import { Observable } from 'rxjs';
import { getCards } from '../../store/actions';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [FiltersComponent, CatalogComponent],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent implements OnInit {
  public cars$!: Observable<Card[]>
  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.cars$ = this.store.select(selectCatalog)
    this.cars$.subscribe(data=> {
      if(!data.length){
        console.log('dispatch')
        this.store.dispatch(getCards())
      }else{
        console.log('store')
      }
      console.log(data)})
  }

}
