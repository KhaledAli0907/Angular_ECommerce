import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCardComponent } from '../p-card/p-card.component';
import { ProductsComponent } from '../products/products.component';
import productsJson from '../../assets/products.json';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  products: any[] = productsJson;

  productItem: any;
  @Input() id!: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let productId = +params['id'];
      console.log(productId);
      this.productItem = this.products.find(
        (product) => product.id === productId
      );
      console.log([this.productItem]);
      
    })
  }
}
