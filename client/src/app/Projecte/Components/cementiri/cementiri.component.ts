import { Component, Input } from '@angular/core';
import { IPeca } from '../../Model/Interface/IPeca';

@Component({
  selector: 'app-cementiri',
  templateUrl: './cementiri.component.html',
  styleUrls: ['./cementiri.component.scss','../jugar/jugar.component.scss']
})
export class CementiriComponent {
  @Input() cementiri:IPeca[] = [];
}
