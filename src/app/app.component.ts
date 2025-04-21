import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from './boton/boton.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';

  edad = 20;

  suma() {
    this.edad++;
  }

  resta() {
    this.edad--;
  }
}
