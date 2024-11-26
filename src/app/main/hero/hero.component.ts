import { Component } from '@angular/core';
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'hero-section',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
}
