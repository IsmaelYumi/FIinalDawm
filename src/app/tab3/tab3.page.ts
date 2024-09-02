import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Productos } from '../interfaces/productos';  // Usando la interfaz correcta
import { ProviderproductsService } from '../services/providerproducts.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule
  ],
  providers: [ProviderproductsService],
})
export class Tab3Page implements OnInit {
  public data: Productos[] = [];  // Usando la interfaz correcta
  checkoutForm = this.formBuilder.group({
    texto: '',
    imageUrl: '',
    rating: 0
  });

  constructor(private dataProvider: ProviderproductsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataProvider.getResponse().subscribe(response => {
      if (response != null) {
        this.data = Object.values(response) as Productos[];  // Usando la interfaz correcta
      }
    });
  }

  

  generateStars(rating: number): string[] {
    return Array(5).fill('far fa-star').map((_, i) => i < rating ? 'fas fa-star' : 'far fa-star');
  }
}
