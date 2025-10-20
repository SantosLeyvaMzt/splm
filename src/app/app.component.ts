// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';


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
}