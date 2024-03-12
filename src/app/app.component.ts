import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  template: `
    <main>
      <section class="content">
        <app-product-list></app-product-list>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gobake-frontend';
}
