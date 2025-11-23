import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  mobileOpen = false;

  toggleMobileMenu() {
    this.mobileOpen = !this.mobileOpen;
  }
}
