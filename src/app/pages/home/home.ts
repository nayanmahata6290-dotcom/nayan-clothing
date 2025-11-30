// src/app/pages/home/home.ts
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCard, NgFor, NgIf, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  categories = [
    { id: 'all', title: 'All' },
    { id: 'men', title: 'Men' },
    { id: 'women', title: 'Women' },
    { id: 'tees', title: 'T-Shirts' },
    { id: 'hoodies', title: 'Hoodies' },
    { id: 'bottoms', title: 'Bottoms' }
  ];

  // Replace these images with your assets (assets/images/...)
  products = [
    { id: '1', title: "Midnight Black Oversized Tee", category: "T-Shirts", gender: 'men', price: 699, image: "assets/images/t-shirt1.jpg", sizes: ['S','M','L'] },
    { id: '2', title: "Storm Grey Hoodie", category: "Hoodies", gender: 'men', price: 1499, image: "assets/images/t-shirt2.jpg", sizes: ['M','L','XL'] },
    { id: '3', title: "Charcoal Joggers", category: "Bottoms", gender: 'men', price: 1299, image: "assets/images/t-shirt3.jpg", sizes: ['M','L'] },
    { id: '4', title: "Sand Beige Co-ord Set", category: "Sets", gender: 'women', price: 1999, image: "assets/images/t-shirt4.jpg", sizes: ['S','M'] },
    { id: '5', title: "Classic White Tee", category: "T-Shirts", gender: 'women', price: 699, image: "assets/images/t-shirt5.jpg", sizes: ['S','M','L'] },
    { id: '6', title: "Navy Trackpants", category: "Bottoms", gender: 'men', price: 1099, image: "assets/images/t-shirt6.jpg", sizes: ['M','L','XL'] }
  ];

  activeCategory = 'all';
  search = '';

  get filteredProducts() {
    const q = this.search.trim().toLowerCase();
    return this.products.filter(p => {
      const matchesCategory = this.activeCategory === 'all'
        ? true
        : (this.activeCategory === 'men' || this.activeCategory === 'women')
          ? p.gender === this.activeCategory
          : p.category.toLowerCase().includes(this.activeCategory);
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || (p.category || '').toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }

  setCategory(id: string) {
    this.activeCategory = id;
  }

  onSearchChange(val: string) {
    this.search = val;
  }
}
