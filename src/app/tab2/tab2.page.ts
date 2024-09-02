import { Component, Injector } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBackButton, 
  IonGrid, IonRow, IonCol, IonImg 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline, notificationsOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, 
    IonBackButton, IonGrid, IonRow, IonCol, IonImg
  ],
})
export class Tab2Page {

  constructor(public injector: Injector) {
    addIcons({
      'person-circle-outline': personCircleOutline,
      'notifications-outline': notificationsOutline,
      'cart-outline': cartOutline
    });
  }
}
