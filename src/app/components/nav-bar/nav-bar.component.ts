import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  image:string="../../../assets/image/Logo_V2.gif"
  isNavVisible = false;

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }
}
