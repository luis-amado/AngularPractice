import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {
  @Input() text = 'dale click';
  @Input() color = 'white';
  @Output() onClick = new EventEmitter();

  clicked() {
    this.onClick.emit();
  }
}
