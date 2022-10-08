import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {JugueteService} from '../services/juguete.service';

@Component({
  selector: 'app-juegues-nia-form',
  templateUrl: './juegues-nia-form.page.html',
  styleUrls: ['./juegues-nia-form.page.scss'],
})
export class JueguesNiaFormPage implements OnInit {

  id: any = null;
  // descripcion: any = '';
  // nombre: any = '';

  juguete: any = {
    id: null,
    nombre: '',
    descripcion: ''
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private jugueteService: JugueteService,
    private router: Router
  ) { }
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;

      if (this.id !== '0'){
        this.getJuguete();
      }

    });
  }


  getJuguete(){
    this.jugueteService.getJuguete(this.id).subscribe(response =>{
      this.juguete = response;
      this.id = this.juguete.id;
    });
  }

  updateJuguete(){
    this.jugueteService.updateJuguete(this.juguete.id, this.juguete).subscribe(response =>{
      this.getJuguete();
    });
  }

  deleteJuguete(){
    this.jugueteService.deleteJuguete(this.id).subscribe(response =>{
      this.router.navigateByUrl('/juguetes-nia');
    });
  }
  createJuguete(){
    this.jugueteService.createJuguete(
      {
        nombre: this.juguete.nombre,
        descripcion: this.juguete.descripcion
      }).subscribe(response =>{

      this.router.navigateByUrl('/juguetes-nia');
    });


  }
}
