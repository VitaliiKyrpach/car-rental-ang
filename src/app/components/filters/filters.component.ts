import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'car-filters',
  standalone: true,
  imports: [MatDividerModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  public filterGroup = new FormGroup({
    brand: new FormControl(''),
    price: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl('')
  })
}
