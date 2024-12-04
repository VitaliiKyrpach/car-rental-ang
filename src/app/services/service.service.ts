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
}
