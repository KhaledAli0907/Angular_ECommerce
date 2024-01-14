import { Component } from '@angular/core';
import productsJson from '../../assets/products.json';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor() {
    let products: any[] = productsJson;
  }
}
