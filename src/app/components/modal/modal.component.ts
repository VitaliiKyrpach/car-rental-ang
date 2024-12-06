import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA, MatDialog,MatDialogActions,
  MatDialogClose, 
  MatDialogModule} from '@angular/material/dialog';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, IconSpriteModule, MatButtonModule, MatDialogActions,
    MatDialogClose, MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  public data = inject(MAT_DIALOG_DATA);
  public address!: string[]
  public conditions!: string[]
  public age!: string[]
  public fixMileage!: string
  public price!: number

  constructor( private dialog: MatDialog){}

  ngOnInit(): void {
    console.log(this.data.card)
    this.address = this.data.card.address.split(', ')
   this.conditions = this.data.card.rentalConditions.split("\n");
	 this.age = this.conditions[0].split(": ");
   this.conditions.shift()
   this.fixMileage = this.data.card.mileage.toLocaleString();
   this.price = this.data.card.rentalPrice.replace(/[^0-9]/g, "")
  }

  public closeModal(){
    this.dialog.closeAll()
  }
  handleClick(event: Event) {
    event.stopPropagation();
  }
}
