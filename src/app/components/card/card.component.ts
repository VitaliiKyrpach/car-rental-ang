import { Component, inject, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Card } from '../interface/interface';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { addCard, removeCard } from '../../store/actions';
import { selectFavorites } from '../../store/selectors';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, IconSpriteModule, MatDialogModule, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  dialog = inject(MatDialog);

  @Input() public card!: Card
  @Input() public favorites!: Card[]


  public address!: string[]
  public isAdd:boolean = false

  constructor(private store: Store){}

  ngOnInit(): void {
     this.isAdd = !!this.favorites.find(item => item.id === this.card.id)
    this.address = this.card.address.split(', ')
  }
  public openDialog() {
    this.dialog.open(ModalComponent, {
      data: {
        card: this.card
      }
    });
  }
  public handleClick(card: Card):void{
    if(this.isAdd){
      console.log('dispatch remove')
      this.store.dispatch(removeCard({id: card.id}))
    } else{
      console.log('dispatch add')
      this.store.dispatch(addCard({card}))
    }
    this.isAdd = !this.isAdd
  }
}
