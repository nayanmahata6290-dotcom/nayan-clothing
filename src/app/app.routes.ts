import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product/:id', component: ProductDetail},
  { path: 'cart', component: Cart},
  // other routes
];
