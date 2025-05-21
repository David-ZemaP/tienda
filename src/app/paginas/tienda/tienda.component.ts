import { Component, inject } from '@angular/core';
import { SaludoComponent } from '../../elementos/saludo/saludo.component';
import { ProductoComponent } from '../../elementos/producto/producto.component';
import { Product } from '../../interfaces/product';
import { ProductoService } from '../../servisios/producto.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tienda',
  imports: [SaludoComponent, ProductoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss',
})
export class TiendaComponent {
  listaDeProductos: Product[] = [];
  productService: ProductoService = inject(ProductoService);
  constructor() {
    firstValueFrom(this.productService.obtenerTodosLosProductos())
      .then((data) => (this.listaDeProductos = data))
      .catch((err) => console.error('Error al obtener los productos:', err));
  }
}
