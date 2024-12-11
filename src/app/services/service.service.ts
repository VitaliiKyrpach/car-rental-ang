import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../components/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }
  public getCars(): Observable<any>{
    return this.http.get("https://65283a8c931d71583df210de.mockapi.io/adverts")
  }

  public getFromLS (): Card[]{
    const isExist = localStorage.getItem('favorites');
      const arr = isExist ? JSON.parse(isExist) : [];
      return arr
  }

  public setToLS(card: Card): void{
    const isExist = localStorage.getItem('favorites');
      const arr = isExist ? JSON.parse(isExist) : [];
      const newArr = arr.filter((item: Card)=> item.id !== card.id)
      localStorage.setItem('favorites', JSON.stringify(newArr)) 
  }
  public removeFromLS(card: Card): void{
    const isExist = localStorage.getItem('favorites');
      const arr = isExist ? JSON.parse(isExist) : [];
      arr.push(card)
      localStorage.setItem('favorites', JSON.stringify(arr)) 
  }
}
