import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../servisios/producto.service';
import { Product } from '../../interfaces/product';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-detalles',
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss',
})
export class DetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productoService: ProductoService = inject(ProductoService);
  detalleProducto: Product | undefined;
  constructor() {
    const idProducto = Number(this.route.snapshot.params['id']);
    firstValueFrom(this.productoService.obtenerProductoPorId(idProducto))
    .then(data => this.detalleProducto = data)
    .catch(err => console.error('Error al obtener el producto:', err));
  }
}
