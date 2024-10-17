import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { MenuwebComponent } from "../menuweb/menuweb.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "../footer/footer.component";
import {  CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MenuwebComponent, NgbDatepicker, NgbModule, FooterComponent, CarouselModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent  {
  selectedDate: NgbDateStruct | undefined;
  isCalendarOpen = false; // Variable para controlar si el calendario está abierto

  
  responsiveOptions: any[] | undefined;
  autoplayIntervalId: any;


  ngOnInit() {

   this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 2
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}

  // Método que maneja la selección de la fecha
  onDateSelect(date: NgbDateStruct) {
    this.selectedDate = date;
    this.isCalendarOpen = false; // Cerrar el calendario al seleccionar una fecha
  }

  // Método para alternar la visibilidad del calendario
  toggleCalendar() {
    this.isCalendarOpen = !this.isCalendarOpen; // Cambia el estado del calendario
  }


  
  products = [
    {
      image: 'pic-11.webp', // URL de la imagen
      description: 'Estaremos felices de tener tu compañía para contarte sobre La Ferro y que puedas enamorarte de este proyecto social tanto como nosotros, para ayudarnos a seguir creciendo.', // Descripción del ítem
      name: 'Velada de los sueños.', // Descripción del ítem
      link: 'https://example.com/page1' // Enlace asociado
    },
    {
      image: 'pic-11.webp', // URL de la imagen
      description: 'Estaremos felices de tener tu compañía para contarte sobre La Ferro y que puedas enamorarte de este proyecto social tanto como nosotros, para ayudarnos a seguir creciendo.', // Descripción del ítem
      name: 'Velada de los sueños.', // Descripción del ítem
      link: 'https://example.com/page1' // Enlace asociado
    },
    {
      image: 'pic-11.webp', // URL de la imagen
      description: 'Estaremos felices de tener tu compañía para contarte sobre La Ferro y que puedas enamorarte de este proyecto social tanto como nosotros, para ayudarnos a seguir creciendo.', // Descripción del ítem
      name: 'Velada de los sueños.', // Descripción del ítem
      link: 'https://example.com/page1' // Enlace asociado
    },
    {
      image: 'pic-11.webp', // URL de la imagen
      description: 'Estaremos felices de tener tu compañía para contarte sobre La Ferro y que puedas enamorarte de este proyecto social tanto como nosotros, para ayudarnos a seguir creciendo.', // Descripción del ítem
      name: 'Velada de los sueños.', // Descripción del ítem
      link: 'https://example.com/page1' // Enlace asociado
    },
    {
      image: 'pic-11.webp', // URL de la imagen
      description: 'Estaremos felices de tener tu compañía para contarte sobre La Ferro y que puedas enamorarte de este proyecto social tanto como nosotros, para ayudarnos a seguir creciendo.', // Descripción del ítem
      name: 'Velada de los sueños.', // Descripción del ítem
      link: 'https://example.com/page1' // Enlace asociado
    },
    {
      image: 'pic-11.webp', // URL de la imagen
      description: 'Estaremos felices de tener tu compañía para contarte sobre La Ferro y que puedas enamorarte de este proyecto social tanto como nosotros, para ayudarnos a seguir creciendo.', // Descripción del ítem
      name: 'Velada de los sueños.', // Descripción del ítem
      link: 'https://example.com/page1' // Enlace asociado
    },
  ];



}
