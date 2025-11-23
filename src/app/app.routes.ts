import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // we will add more routes later: products, cart, etc.
];
