import { Routes } from '@angular/router';
import { InicioComponent } from './web/inicio/inicio.component';
import { SomosComponent } from './web/somos/somos.component';
import { EstacionesComponent } from './web/estaciones/estaciones.component';
import { ConveniosComponent } from './web/convenios/convenios.component';
import { EventosComponent } from './web/eventos/eventos.component';



export const routes: Routes = [
  {path: '', redirectTo:'inicio' , pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'somos', component:SomosComponent},
  {path: 'estaciones', component:EstacionesComponent},
  {path: 'convenios', component:ConveniosComponent},
  {path: 'eventos', component:EventosComponent},
];
