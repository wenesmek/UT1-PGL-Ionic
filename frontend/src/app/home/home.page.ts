import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router) {}

  gotoJuguetes() {
    this.router.navigateByUrl("/juguetes-nia");
  };

  gotoCrearJuguete() {
    this.router.navigateByUrl("/juegues-nia-form/0");
  };


}
