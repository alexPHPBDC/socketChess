import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Equip } from '../Model/Implementation/Equip';
import { infoAfegir, jugadorPartida } from '../Utils/Interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})

export class EquipsService {
    jugadorAssignat: Observable<jugadorPartida> = this.socket.fromEvent<jugadorPartida>('jugador');
    shaAfegitEquip: Observable<infoAfegir> = this.socket.fromEvent<infoAfegir>('shaAfegitEquip');
    constructor(private socket: Socket) { }
    
    afegirEquip(equip: Equip):void {this.socket.emit('afegirEquip', equip); }
    
    getJugadorAssignat():void { this.socket.emit('getJugadorAssignat',{}); }

    

}


