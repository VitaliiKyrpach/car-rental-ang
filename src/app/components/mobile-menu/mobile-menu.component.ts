import { NgClass } from '@angular/common';
import { Component, input, Input, output, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NgClass, IconSpriteModule, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent {
@Input() isOpen = false
@Input() empty = true
public menuClose = output()

}
