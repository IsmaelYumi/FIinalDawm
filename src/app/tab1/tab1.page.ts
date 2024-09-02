import { Component, Injector} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBackButton, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonButton, 
    IonIcon, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol],
})
export class Tab1Page {

  constructor( public injector: Injector) {
    addIcons({
      'person-circle-outline': personCircleOutline
    });
  }
}
