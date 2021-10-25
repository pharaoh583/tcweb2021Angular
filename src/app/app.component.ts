import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frameworks';
  contador = 1;
  contador1 = 1;
  contador2 = 1;

  incrementar() {
    this.contador++;
  }
  incrementar1() {
    this.contador1++;
  }
  incrementar2() {
    this.contador2++;
  }
}
