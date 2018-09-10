import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parqueadero Unidad Residencial Tukana 2018';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
