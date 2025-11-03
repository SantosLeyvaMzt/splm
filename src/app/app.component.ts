// app.component.ts
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeSectionComponent, 
    AboutUsSectionComponent, 
    ContactSectionComponent, 
    ServicesSectionComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // o .scss
})
export class AppComponent {
    title = 'Seguridad Privada SPLM';
    anioActual = new Date().getFullYear();

    // Inyectamos LOCALE_ID para obtener el locale del bundle actual (ej. 'es-MX' o 'en-US')
  constructor(@Inject(LOCALE_ID) public activeLocale: string) { }

  /**
   * Genera la URL de redirección incluyendo el locale de destino y el hash actual.
   * Esto asegura que el navegador recargue el bundle correcto (en el idioma deseado) 
   * y mantenga la navegación interna (el ancla #inicio, #servicios, etc.).
   * * @param locale El locale de destino (debe ser 'es-MX' o 'en-US').
   * @returns La URL completa a la que redirigir.
   */
  getLocalizedUrl(locale: string): string {
    const hash = window.location.hash || '#inicio'; // Obtiene el #hash actual o usa #inicio por defecto
    let baseUrl = `/${locale}/`;

    // Retornamos la URL completa (ej. /en-US/#servicios) para forzar la recarga del bundle
    return `${baseUrl}${hash}`;
  }

}