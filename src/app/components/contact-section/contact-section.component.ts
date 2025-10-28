import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

    formData = {
        nombre: '',
        email: '',
        mensaje: ''
    };

    constructor(private http: HttpClient) { }

    onSubmit() {
        // URL de tu endpoint en el backend que procesará el correo
        const backendUrl = 'https://splm.crackfutbolista.com/send-email.php';

        this.http.post(backendUrl, this.formData)
        .subscribe({
            next: (response) => {
                alert('Mensaje enviado con éxito');
                // Opcional: Limpiar el formulario
                this.formData = { nombre: '', email: '', mensaje: '' };
            },
            error: (error) => {
                console.error('Hubo un error al enviar el mensaje', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
        });
    }
}