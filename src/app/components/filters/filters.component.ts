import { Component, ElementRef, HostListener } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { NgClass } from '@angular/common';
import { CatalogService } from '../../services/service.service';
import brands from '../../helpers/makes.json'
import { FilterGroup, Filters } from '../interface/interface';
import { Store } from '@ngrx/store';
import { setFilters } from '../../store/actions';


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
  public brandsArr = brands.sort()

  constructor(private service: CatalogService, private el: ElementRef, private store: Store){
    this.priceArr = this.service.getPrice()
  }

  @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent){
      const clickedInside = this.el.nativeElement.contains(event.target);
      if(!clickedInside){
        this.isOpen.brand = false;
        this.isOpen.price = false
      }
    }
  
  public filterGroup = new FormGroup<FilterGroup>({
    brand: new FormControl('' ,{ nonNullable: true }) ,
    price: new FormControl('', { nonNullable: true }),
    from: new FormControl('', { nonNullable: true }),
    to: new FormControl('', { nonNullable: true })
  })

  public handleOpen(type: 'price' | 'brand'){
      this.isOpen[type] = !this.isOpen[type]
      if (this.isOpen.price && type !== 'price') {
        this.isOpen.price = false;
      }
      if (this.isOpen.brand && type !== 'brand') {
        this.isOpen.brand = false;
      }
  }
  public handlePick(event: MouseEvent, type: 'brand'|'price'){
    const target = event.target as HTMLElement;
    if (target && target.textContent) {
      this.filterGroup.get(type)?.setValue(target.textContent);
    }
  }
  public handleQuery(){
    console.log(this.filterGroup.controls.brand.value)
    if(this.filterGroup.controls.brand.value !== ''){
      this.brandsArr = brands.sort().filter(item=> item.includes(this.filterGroup.controls.brand.value))
    }else{
      this.brandsArr = brands.sort()
    }
  } 
  public onSubmit(){
    console.log(this.filterGroup.value)
    const filters: Filters = {
      brand: this.filterGroup.value.brand ?? '',
      price: this.filterGroup.value.price ?? '',
      from: this.filterGroup.value.from ?? '',
      to: this.filterGroup.value.to ?? '',
    };
    this.store.dispatch(setFilters({filters}))
  }
}
