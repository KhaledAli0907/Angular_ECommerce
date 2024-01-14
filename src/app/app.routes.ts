import { Routes } from '@angular/router';
import { PCardComponent } from './p-card/p-card.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: PCardComponent,
    title: 'Products',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'product/:id',
    component: DetailsComponent,
    title: 'Details',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
];
