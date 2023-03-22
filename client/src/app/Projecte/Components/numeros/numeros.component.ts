import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss',
  '../jugar/jugar.component.scss',

]
})
export class NumerosComponent {
  @Input() numeros:string[] = [];
}
