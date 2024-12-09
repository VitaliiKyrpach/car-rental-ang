import { Component, OnInit} from '@angular/core';
import { Card } from '../../components/interface/interface';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/selectors';
import { CatalogComponent } from '../../components/catalog/catalog.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CatalogComponent, FiltersComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit {
  public cars$!: Observable<Card[]>

  constructor(private store: Store){}

  ngOnInit(): void {
    this.cars$ = this.store.select(selectFavorites)
  }
}
