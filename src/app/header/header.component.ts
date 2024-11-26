import { Component } from '@angular/core';
import { faSearch, faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faSearch = faSearch;
  faBagShopping = faBagShopping;
  faHeart = faHeart;
}
