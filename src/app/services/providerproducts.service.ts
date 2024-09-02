import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderproductsService {

  private URL: string = 'https://hydryc-72698-default-rtdb.firebaseio.com/products.json';

    constructor(private http: HttpClient) { }

    getResponse() {
        return this.http.get(this.URL);
    }

    postResponse(data: any) {
        return this.http.post(this.URL, data);
    }
}
