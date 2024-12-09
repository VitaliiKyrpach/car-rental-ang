import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../interface/interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/selectors';

@Component({
  selector: 'car-catalog',
  standalone: true,
  imports: [CardComponent, AsyncPipe, MatButtonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  @Input() public data$!: Observable<Card[]>
  private allCars: Card[] = [];
  public cars: Card[] = [];
  public favorites :Card[] = []
  private count: number = 12;
  public isVisible: boolean = true;

  constructor(private store:Store){}

  ngOnInit():void {
    this.data$.subscribe(data=> {
      this.allCars = data
      console.log(this.allCars)
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
