import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import {MatButtonModule} from '@angular/material/button';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/selectors';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconSpriteModule, MatButtonModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public empty: boolean = true
  constructor(private store:Store){}
  ngOnInit(): void {
    this.store.select(selectFavorites).subscribe(arr=>{
      if(arr.length){
        this.empty = false
      }else{
        this.empty = true
      }
    })
  }

}