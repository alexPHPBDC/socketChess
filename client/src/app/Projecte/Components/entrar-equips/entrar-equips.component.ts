import { Component, OnInit } from '@angular/core';
import { Equip } from '../../Model/Implementation/Equip';
import { Jugador } from '../../Model/Implementation/Jugador';
import { EquipsService } from '../../Service/equips.service';
import { infoAfegir } from '../../Utils/Interfaces/interfaces';

@Component({
  selector: 'app-entrar-equips',
  templateUrl: './entrar-equips.component.html',
  styleUrls: ['./entrar-equips.component.scss']
})
export class EntrarEquipsComponent implements OnInit {
  equip: string = "";
  jugador1: string = "";
  jugador2: string = "";
  equipJaIntroduit: boolean = false;
  jugadorJaIntroduit: boolean = false;
  constructor(private equipService: EquipsService) {
  }



  ngOnInit(): void {
    this.equipService.shaAfegitEquip.subscribe((data: infoAfegir) => {
      if (data.shaAfegit) {
        this.equip = "";
        this.jugador1 = "";
        this.jugador2 = "";
        this.equipJaIntroduit = false;
        this.jugadorJaIntroduit = false;
      } else {
        if (data.rao == "equip") {
          this.equipJaIntroduit = true;
          this.jugadorJaIntroduit = false;
        } else {
          this.equipJaIntroduit = false;
          this.jugadorJaIntroduit = true;
        }

      }
    });
  }

  onSubmit(form: any) {

    if (form.valid) {
      this.equipService.afegirEquip(new Equip(this.equip, new Jugador(this.jugador1), new Jugador(this.jugador2)));
    }
  }

}
