// src/app/shared/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  size?: string | null;
  qty: number;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private storageKey = 'cart';
  private _items$ = new BehaviorSubject<CartItem[]>(this.readFromStorage());
  readonly items$ = this._items$.asObservable();

  private readFromStorage(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch {
      return [];
    }
  }

  private writeToStorage(items: CartItem[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this._items$.next(items);
  }

  getItems(): CartItem[] {
    return this._items$.value;
  }

  addItem(item: CartItem) {
    const items = this.getItems();
    const existing = items.find(i => i.id === item.id && (i.size ?? '') === (item.size ?? ''));
    if (existing) {
      existing.qty += item.qty;
    } else {
      items.push({ ...item });
    }
    this.writeToStorage(items);
  }

  updateQty(id: string, size: string | null, qty: number) {
    const items = this.getItems().map(i => {
      if (i.id === id && (i.size ?? '') === (size ?? '')) i.qty = Math.max(1, qty);
      return i;
    });
    this.writeToStorage(items);
  }

  removeItem(id: string, size: string | null) {
    const items = this.getItems().filter(i => !(i.id === id && (i.size ?? '') === (size ?? '')));
    this.writeToStorage(items);
  }

  clear() {
    this.writeToStorage([]);
  }

  getCount(): number {
    return this.getItems().reduce((s, i) => s + i.qty, 0);
  }

  getSubtotal(): number {
    return this.getItems().reduce((s, i) => s + i.qty * i.price, 0);
  }
}
