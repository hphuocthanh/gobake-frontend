import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by category" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-product-item></app-product-item>
    </section>
  `,
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
