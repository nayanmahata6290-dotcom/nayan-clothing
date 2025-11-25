import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../shared/services/cart';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product: any = null;
  selectedSize: string | null = null;
  quantity = 1;

  constructor(private route: ActivatedRoute, private cart: CartService, private router: Router) 
  // existing code

 {
    const id = this.route.snapshot.paramMap.get('id');

    const items = [
      { id: '1', title: 'Midnight Black Oversized Tee', category: 'Oversized Tee', price: 799, sizes: ['S','M','L'], image: 'https://images.pexels.com/photos/6311395/pexels-photo-6311395.jpeg', description: 'Premium quality oversized tee.' },
      { id: '2', title: 'Storm Grey Hoodie', category: 'Hoodie', price: 1499, sizes: ['M','L','XL'], image: 'https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg', description: 'Warm fleece hoodie.' }
    ];

    this.product = items.find(x => x.id === id) ?? items[0];
    this.selectedSize = this.product.sizes?.[0];
  }

  selectSize(s: string) { this.selectedSize = s; }
  inc() { this.quantity++; }
  dec() { if (this.quantity > 1) this.quantity--; }

  addToCart() {
  this.cart.addItem({
    id: this.product.id,
    title: this.product.title,
    price: this.product.price,
    size: this.selectedSize ?? null,
    qty: this.quantity,
    image: this.product.image
  });
  // visual feedback
  alert('Added to cart ✅');
  // optional: navigate to cart:
  // this.router.navigate(['/cart']);
}

}
