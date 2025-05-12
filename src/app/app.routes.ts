import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', component: InicioComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'tienda', component: TiendaComponent },    
];
