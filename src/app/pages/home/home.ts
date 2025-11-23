import { Component } from '@angular/core';
import { ProductCard } from '../../shared/product-card/product-card';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCard, NgFor],
  templateUrl: './home.html',   // or './Home.html'
  styleUrls: ['./home.css'],       // or './Home.css'
})
export class HomeComponent {

  products = [
    {
      title: "Midnight Black Oversized Tee",
      category: "Oversized Tee",
      price: 799,
      image: "https://images.pexels.com/photos/6311395/pexels-photo-6311395.jpeg"
    },
    {
      title: "Storm Grey Hoodie",
      category: "Hoodie",
      price: 1499,
      image: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg"
    },
    {
      title: "Charcoal Joggers",
      category: "Joggers",
      price: 1299,
      image: "https://images.pexels.com/photos/6311608/pexels-photo-6311608.jpeg"
    },
    {
      title: "Sand Beige Co-ord Set",
      category: "Co-ord Set",
      price: 1999,
      image: "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg"
    }
  ];

}
