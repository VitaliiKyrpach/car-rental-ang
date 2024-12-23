import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card, Filters } from '../interface/interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { selectFavorites, selectFilters } from '../../store/selectors';
import { CatalogService } from '../../services/service.service';

@Component({
  selector: 'car-catalog',
  standalone: true,
  imports: [CardComponent, AsyncPipe, MatButtonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  @Input() public data$!: Observable<Card[]>
  public allCars: Card[] = [];
  public cars: Card[] = [];
  public filteredCars: Card[] = [];
  public favorites :Card[] = []
  private count: number = 12;
  public isVisible: boolean = true;
  private filters$!: Observable<Filters>

  constructor(private store:Store, private service: CatalogService){}

  ngOnInit():void {
    this.filters$ = this.store.select(selectFilters)
    this.filters$.subscribe(items=>{ 
      console.log('filters',items)
      this.filteredCars = this.service.filterCards(this.allCars, items)
      if(this.filteredCars.length > 12){
        this.cars = this.filteredCars.slice(0,12)
        this.isVisible = true
      } else {
        this.cars = this.filteredCars
        this.isVisible = false
      }
    })
    this.data$.subscribe(data=> {
      this.allCars = data
      if(this.allCars.length > 12){
        this.cars = data.slice(0,12)
        this.isVisible = true
      } else {
        this.cars = data
        this.isVisible = false
      }
    })
    
    this.store.select(selectFavorites).subscribe(items => 
      {
        this.favorites = items
     })

  }

  public loadMore():void {
    this.count +=12
    this.updCars()
    if(this.allCars.length <= this.cars.length){
      this.isVisible = false
    }
  }
  private updCars():void {
    this.cars = this.allCars.slice(0, this.count)
  }
}
