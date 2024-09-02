import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBackButton, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonNavLink } from '@ionic/angular/standalone';
import { ModalComponent } from './modal/modal.component';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';
import { Products } from '../interfaces/products';  // Importa la interfaz

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, 
    IonIcon, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonNavLink
  ],
})
export class Tab1Page {
  products: Products[] = [  // Aplica la interfaz aquí
    { texto: 'Teclado', description: 'Un teclado mecánico con luces RGB.', imageUrl: '/assets/img/teclado-z11.png' },
    { texto: 'Mouse', description: 'Mouse ergonómico para gaming.', imageUrl: '/assets/img/mouse-x11.png' },
    { texto: 'Audífonos', description: 'Audífonos de alta calidad con cancelación de ruido.', imageUrl: '/assets/img/audifonos-razer.png' },
    { texto: 'Reloj', description: 'Reloj digital con múltiples funciones.', imageUrl: '/assets/img/reloj-digital.png' },
  ];

  modal = ModalComponent;

  constructor(public injector: Injector) {
    addIcons({
      'person-circle-outline': personCircleOutline
    });
  }
  
}
