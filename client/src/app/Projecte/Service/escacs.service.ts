import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { informacioMourePeca, informacioPartida } from '../Utils/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class EscacsService {
  partidaComenca:Observable<informacioPartida> = this.socket.fromEvent<informacioPartida>('partidaComenca');
  pecaShaMogut:Observable<informacioMourePeca> = this.socket.fromEvent<informacioMourePeca>('pecaShaMogut');

  mourePeca(info: informacioMourePeca):void { this.socket.emit('mourePeca', info) }
  

  constructor(private socket: Socket) { }

}

