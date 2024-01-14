import { Component } from '@angular/core';
import productsJson from '../../assets/products.json';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-p-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './p-card.component.html',
  styleUrl: './p-card.component.css',
})
export class PCardComponent {
  products: any[] = productsJson;

  constructor(private router: Router) {}

  naviagetToDetails(id: string) {
    this.router.navigate([`/details/${id}`], { queryParams: { id: id } });
  }
}
