import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonImg],
})
export class ModalComponent implements OnInit {
  data = { texto: 'Producto de prueba', description: 'Descripción de prueba', imageUrl: '/assets/img/teclado-z11.png' };

  ngOnInit() {
    console.log('Datos estáticos en el modal:', this.data); // Verifica los datos estáticos
  }
}
