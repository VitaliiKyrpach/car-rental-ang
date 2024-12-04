import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../interface/interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'car-catalog',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input() public data$!: Observable<Card[]>
}
