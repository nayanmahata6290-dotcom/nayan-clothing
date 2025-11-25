import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  mobileOpen = false;
  count = 0;
  constructor(private cart: CartService){
    this.count = cart.getCount();
    cart.items$.subscribe(() => this.count = cart.getCount());
  }

  toggleMobileMenu() { this.mobileOpen = !this.mobileOpen; }
}
