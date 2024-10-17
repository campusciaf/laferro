import { Component } from '@angular/core';
import { MenuwebComponent } from "../menuweb/menuweb.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-estaciones',
  standalone: true,
  imports: [MenuwebComponent, FooterComponent],
  templateUrl: './estaciones.component.html',
  styleUrl: './estaciones.component.css'
})
export class EstacionesComponent {

}
