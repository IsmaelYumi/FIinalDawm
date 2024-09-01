import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private URL="https://finaldawm-default-rtdb.firebaseio.com/Usuarios.json"

  constructor(private Http:HttpClient) { }
  getResponse(){
    return this.Http.get( this.URL);
  }
}
