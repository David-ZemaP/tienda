import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  @Input() product!: Product;
  
}
