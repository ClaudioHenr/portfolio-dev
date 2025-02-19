import { Component } from '@angular/core';
import { changeFavicon } from '../../utils/favicon-utils';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  updateFavicon(iconPath: string) {
    changeFavicon(iconPath)
  }
}
