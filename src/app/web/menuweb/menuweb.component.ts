import { Component, HostListener } from '@angular/core';
import { NgClass, NgFor, NgIf, } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menuweb',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './menuweb.component.html',
  styleUrl: './menuweb.component.css'
})
export class MenuwebComponent {
  navActive = false;
  dropdownActive = false;
  toggleNavbar() {
    this.navActive = !this.navActive;
  }


  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.dropdownActive = false;
    }
  }

  isScrolled = false;

   // Escuchar el evento scroll
   @HostListener('window:scroll', [])
   onWindowScroll() {
     const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

     if (scrollY > 0) {
       this.isScrolled = true;  // Cuando hay desplazamiento
     } else {
       this.isScrolled = false; // Cuando vuelve al tope
     }
   }
}
