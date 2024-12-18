import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { NgClass } from '@angular/common';
import { createPrice } from '../../helpers/prices';
import { CatalogService } from '../../services/service.service';


@Component({
  selector: 'car-filters',
  standalone: true,
  imports: [IconSpriteModule, MatDividerModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, NgClass],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  public isOpen = {brand:false, price: false}
  public priceArr: number[] = []
  public brand = ''

  constructor(private service: CatalogService){
    this.priceArr = this.service.getPrice()
   
  }
  public filterGroup = new FormGroup({
    brand: new FormControl(''),
    price: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl('')
  })

  public handleOpen(type: 'price' | 'brand'){
      this.isOpen[type] = !this.isOpen[type]
  }
  public handlePick(event: any){
    this.filterGroup.get('price')?.setValue(event.target.textContent);
  }
  public handleQuery(){
    console.log(this.filterGroup.controls.brand.value)
  } 
}
