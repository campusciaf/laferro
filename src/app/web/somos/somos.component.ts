import { Component } from '@angular/core';
import { MenuwebComponent } from "../menuweb/menuweb.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-somos',
  standalone: true,
  imports: [MenuwebComponent, FooterComponent],
  templateUrl: './somos.component.html',
  styleUrl: './somos.component.css'
})
export class SomosComponent {

}
