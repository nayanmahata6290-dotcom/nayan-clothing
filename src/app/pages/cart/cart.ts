import { Component, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem, CartService } from '../../shared/services/cart';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnDestroy {
  items: CartItem[] = [];
  private sub: Subscription;

  constructor(public cart: CartService) {
    this.items = this.cart.getItems();
    this.sub = this.cart.items$.subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  inc(item: CartItem) {
    this.cart.updateQty(item.id, item.size ?? null, item.qty + 1);
  }

  dec(item: CartItem) {
    this.cart.updateQty(item.id, item.size ?? null, Math.max(1, item.qty - 1));
  }

  remove(item: CartItem) {
    this.cart.removeItem(item.id, item.size ?? null);
  }

  clear() {
    this.cart.clear();
  }

  get subtotal(): number {
    return this.cart.getSubtotal();
  }
}
