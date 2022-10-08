import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JugueteService {

  endpoint = 'http://localhost:8080/api/juguetes';

  constructor(private httpClient: HttpClient) { }

  getJuguetes() {
    return this.httpClient.get(this.endpoint);
  }

  getJuguete(id){
    return this.httpClient.get(this.endpoint + '/' + id);
  }

  updateJuguete(id, juguete){
    return this.httpClient.put(this.endpoint + '/' + id, juguete);
  }

  deleteJuguete(id){
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  createJuguete(juguete){
    return this.httpClient.post(this.endpoint, juguete);

  }
}
