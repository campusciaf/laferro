import { Component } from '@angular/core';
import { MenuwebComponent } from "../menuweb/menuweb.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [MenuwebComponent, FooterComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

}
