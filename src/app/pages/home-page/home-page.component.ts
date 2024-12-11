import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/interface/interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    const isFavExist = localStorage.getItem('favorites')
    console.log(isFavExist)
    // if(!isFavExist){
    //   const arr: Card[] = []
    //   localStorage.setItem('favorites', JSON.stringify(arr))
    // }
  }

}
