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

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, IconSpriteModule, MatDialogModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  dialog = inject(MatDialog);

  @Input() public card!: Card
  public address!: string[]
  ngOnInit(): void {
    this.address = this.card.address.split(', ')
  }
  public openDialog() {
    this.dialog.open(ModalComponent, {
      data: {
        card: this.card
      }
    });
  }
}
