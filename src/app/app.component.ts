import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Store } from '@ngrx/store';
import { CatalogService } from './services/service.service';
import { addCards } from './store/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'car-rental-ang';
  constructor(private store: Store, private service: CatalogService ){}
  ngOnInit(): void {
    const favArr = this.service.getFromLS()
    this.store.dispatch(addCards({favArr}))
  }
}
