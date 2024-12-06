import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../interface/interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

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
  private count: number = 12;
  public isVisible: boolean = true;

  ngOnInit():void {
    this.data$.subscribe(data=> {
      this.allCars = data
      this.cars = data.slice(0,12)
    })

    console.log(this.allCars)
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
