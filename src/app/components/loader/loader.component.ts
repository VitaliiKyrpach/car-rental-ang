import { Component } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

}
