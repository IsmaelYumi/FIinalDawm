import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from  '@angular/common/http';
import { Datos} from '../interfaces/datos';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],  
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule,IonicModule,HttpClientModule],
  providers:[ProviderService]
})
export class LoguinPage implements OnInit {
  loguinform!: FormGroup;
  public data: Datos[]=[]

  constructor(private formBuilder:FormBuilder, private router:Router, private dataProvider: ProviderService) {
    this.loguinform = this.formBuilder.group({
      Usuario: ['Usuario', [Validators.required]],
      password: ['password', [Validators.required, Validators.minLength(6)]],
    });
   }
  ngOnInit() {
  }
  getData():Promise<void>{
    return new Promise((resolve,reject)=>{
      this.dataProvider.getResponse().subscribe( response => {
        if( response != null) {
          this.data = Object.values(response) as Datos[]
          resolve()
    }else{
      reject("NO data")
    }
  })
    })
    
  }
  Loguin(){
    const {user, password}=this.loguinform?.value
    try{
      this.getData()
     this.data.forEach((datos)=>{
      if(datos.password==password){
        console.log("Entra");
        this.router.navigate(['tab'])
      }
     })

    }catch(error){
      console.error("Error")

    }
  
    
    
  }
}
