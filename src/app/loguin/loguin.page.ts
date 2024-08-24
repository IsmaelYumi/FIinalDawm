import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],  
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule,IonItem,IonLabel]
})
export class LoguinPage implements OnInit {
  loguinform!: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router) {
    this.loguinform = this.formBuilder.group({
      Usuario: ['Usuario', [Validators.required,]],
      password: ['Password', [Validators.required, Validators.minLength(6)]],
    });
   }
  ngOnInit() {
  }
  Loguin(){
    const {user, password}=this.loguinform?.value
    
    this.router.navigate(['/tabs'])


  }

}
