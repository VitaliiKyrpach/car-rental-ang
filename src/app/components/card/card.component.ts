import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Card } from '../interface/interface';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, IconSpriteModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() public card!: Card
  public address!: string[]
  ngOnInit(): void {
    this.address = this.card.address.split(', ')
  }
}
