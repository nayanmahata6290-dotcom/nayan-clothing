// src/app/shared/product-card/product-card.ts
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any;

  constructor(private cart: CartService) {}

  quickAdd() {
    if (!this.product) return;
    this.cart.addItem({
      id: this.product.id,
      title: this.product.title,
      price: this.product.price,
      size: this.product.sizes?.[0] ?? null,
      qty: 1,
      image: this.product.image
    });
  }
}
