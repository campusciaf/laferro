import { Component } from '@angular/core';
import { MenuwebComponent } from "../menuweb/menuweb.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-convenios',
  standalone: true,
  imports: [MenuwebComponent, FooterComponent],
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.css'
})
export class ConveniosComponent {

}
