import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Casella } from '../../Model/Implementation/Casella';
import { Jugador } from '../../Model/Implementation/Jugador';
import { Partida } from '../../Model/Implementation/Partida';
import { Peca } from '../../Model/Implementation/Peca';
import { Taulell } from '../../Model/Implementation/Taulell';
import { Coordenades } from '../../Model/Interface/Coordenades';
import { EquipsService } from '../../Service/equips.service';
import { EscacsService } from '../../Service/escacs.service';
import { colorCasella,colorPeca } from '../../Utils/Enums/enums';
import { informacioPartida,informacioMourePeca,jugadorPartida } from '../../Utils/Interfaces/interfaces';
@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.scss']
})
export class JugarComponent implements OnInit {
  partidaComencada = false;

  colorCasella: typeof colorCasella = colorCasella;

  partides: Array<Partida> = [];
  jugadorAssignat!: Jugador;
  indexMeuCementiri!: number;
  indexLaMevaPartida!: number;
  laMevaSala: string = "";

  constructor(private equipService: EquipsService, private escacsService: EscacsService) {

  }


  ngOnInit(): void {

    let info: Subscription = this.escacsService.partidaComenca.subscribe((informacioPartida: informacioPartida) => {
      this.partidaComencada = true;
      this.partides[0] = new Partida(informacioPartida.contrincants1);

      this.partides[1] = new Partida(informacioPartida.contrincants2);
      this.partides[1].taulell = Taulell.crearTaulellInvers(this.partides[1].taulell);

      this.laMevaSala = informacioPartida.sala;

      info.unsubscribe();
    });

    this.equipService.jugadorAssignat.subscribe((jugadorPartida: jugadorPartida) => {
      this.jugadorAssignat = jugadorPartida.jugador;
      this.indexLaMevaPartida = jugadorPartida.indexPartida;
      this.indexMeuCementiri = jugadorPartida.indexCementiri;
    });

    this.escacsService.pecaShaMogut.subscribe((informacioMourePeca: informacioMourePeca) => {
      this.mourePeca(informacioMourePeca);
    });
  }

  mourePeca(informacioMourePeca: informacioMourePeca): void {
    if (this.laMevaSala == informacioMourePeca.sala) {
      const partida: Partida = this.partides[informacioMourePeca.indexPartida];
      const taulell: Taulell = partida.taulell;
      const cementiri: Array<Peca> = taulell.cementiris[informacioMourePeca.indexCementiri];

      let casellaInicial: Casella = taulell.caselles[informacioMourePeca.posicioInicial.x][informacioMourePeca.posicioInicial.y]
      let casellaFinal: Casella = taulell.caselles[informacioMourePeca.posicioFinal.x][informacioMourePeca.posicioFinal.y];

      if (casellaFinal.peca != null) {
        cementiri.push(casellaFinal.peca);
      }

      casellaFinal.peca = casellaInicial.peca;
      casellaInicial.peca = null;

      partida.torn = (partida.torn + 1) % 2;
    }
  }

  allowDrop(ev: any): void {
    ev.preventDefault();
  }

  drag(ev: any, coordenades: Coordenades): void {
    ev.dataTransfer.setData("posicioInicial", JSON.stringify(coordenades));
  }

  drop(ev: any, posicioFinal: Coordenades): void {
    ev.preventDefault();
    let posicioInicial: Coordenades = JSON.parse(ev.dataTransfer.getData("posicioInicial"));
    let pecaInicial = this.partides[this.indexLaMevaPartida].taulell.caselles[posicioInicial.x][posicioInicial.y].peca;
    let pecaFinal = this.partides[this.indexLaMevaPartida].taulell.caselles[posicioFinal.x][posicioFinal.y].peca;
    let elMeutorn = this.jugadorAssignat.colorPeces == colorPeca.Blanca ? 0 : 1;

    if (posicioInicial.x == posicioFinal.x && posicioInicial.y == posicioFinal.y) {
      return;
    }
    if (!pecaInicial) {
      return;
    }
    if (pecaInicial.color != this.jugadorAssignat.colorPeces) {
      return;
    }
    if(pecaFinal && pecaInicial.color == pecaFinal.color){
      return;
    }
    if (elMeutorn != this.partides[this.indexLaMevaPartida].torn) {
      return;
    }

    let info: informacioMourePeca = { posicioInicial: posicioInicial, posicioFinal: posicioFinal, indexPartida: this.indexLaMevaPartida, indexCementiri: this.indexMeuCementiri, sala: this.laMevaSala };
    this.escacsService.mourePeca(info);

  }

  canIDrag(x: number, y: number, indexPartida: number): boolean {
    if (indexPartida !== this.indexLaMevaPartida)
      return false;

    const laMevaPartida = this.partides[this.indexLaMevaPartida]
    let torn = this.jugadorAssignat.colorPeces == colorPeca.Blanca ? 0 : 1;
    if (torn != laMevaPartida.torn)
      return false;

    let peca = laMevaPartida.taulell.caselles[x][y].peca;
    if (!peca)
      return false;

    return this.jugadorAssignat.colorPeces == peca.color;
  }

  assignarJugador(): void {
    this.equipService.getJugadorAssignat();
  }

}

