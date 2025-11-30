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
      { id: '1', title: 'Oversized T-shirt', category: 'Oversized T-shirt', price: 399, sizes: ['S','M','L'], image: 'assets/images/t-shirt1.jpg', description: 'Premium quality oversized t-shirt' },
      { id: '2', title: 'Oversized T-shirt', category: 'Oversized T-shirt', price: 399, sizes: ['M','L','XL'], image: 'assets/images/t-shirt2.jpg', description: 'oversized cool t-shirt' },
      {id: '3', title: 'Oversized T-shirt', category: 'Oversized T-shirt', price: 399, sizes: ['S','M','L'], image: 'assets/images/t-shirt3.jpg', description: 'Another oversized t-shirt' },
      {id: '4', title: 'Oversized T-shirt', category: 'Oversized T-shirt', price: 399, sizes: ['S','M','L'], image: 'assets/images/t-shirt4.jpg', description: 'Yet another oversized t-shirt' }
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
