import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lletres',
  templateUrl: './lletres.component.html',
  styleUrls: ['./lletres.component.scss','../jugar/jugar.component.scss',]
})
export class LletresComponent {
  @Input() lletres:string[] = [];
}
