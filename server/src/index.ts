
import express from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import cors from 'cors';
import { Equip } from './Model/Implementation/Equip';
import { Contrincant } from './Model/Implementation/Contrincant';
import { Jugador } from './Model/Implementation/Jugador';
import { IEquip } from './Model/Interface/IEquip';
const app = express();
const server = http.createServer(app);
const port = 4444;
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};
const io = new SocketIOServer(server, {
    cors: corsOptions,
});

let contador = 0;
let equips: Array<Equip> = [];
let nomEquips: Array<string> = [];
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



io.on('connection', (socket: Socket) => {

    socket.on("getJugadorAssignat", () => {

        if (equips.length >= 2) {

            if (contador == 0) {
                socket.emit("jugador", { jugador: equips[0].jugador1, indexPartida: 0, indexCementiri: 0 });
                contador++;
            } else if (contador == 1) {
                socket.emit("jugador", { jugador: equips[1].jugador2, indexPartida: 0, indexCementiri: 1 });
                contador++;
            } else if (contador == 2) {
                socket.emit("jugador", { jugador: equips[0].jugador2, indexPartida: 1, indexCementiri: 1 });
                contador++;
            } else if (contador == 3) {
                socket.emit("jugador", { jugador: equips[1].jugador1, indexPartida: 1, indexCementiri: 0 });

                contador = 0;

                let contrincants1: Contrincant = new Contrincant(equips[0].nomEquip + " VS " + equips[1].nomEquip, equips[0].jugador1, equips[1].jugador2)
                let contrincants2: Contrincant = new Contrincant(equips[1].nomEquip + " VS " + equips[0].nomEquip, equips[1].jugador1, equips[0].jugador2)
                let sala: string = contrincants1.nomVersus + contrincants2.nomVersus;
                let informacioPartida: informacioPartida = { contrincants1: contrincants1, contrincants2: contrincants2, equips: equips, sala: sala };


                io.emit("partidaComenca", informacioPartida);
                equips = equips.filter(equip => equip.nomEquip == equips[0].nomEquip && equip.nomEquip == equips[1].nomEquip);
            }
        } 

    });

    socket.on("afegirEquip", (equipInterface: IEquip) => {
        equipInterface.nomEquip = equipInterface.nomEquip.trim();
        equipInterface.jugador1.nom = equipInterface.jugador1.nom.trim();
        equipInterface.jugador2.nom = equipInterface.jugador2.nom.trim();
        let equip = new Equip(equipInterface.nomEquip, equipInterface.jugador1, equipInterface.jugador2);
        if (!nomEquips.includes(equip.nomEquip)) {

            if (equip.jugador1.nom == equip.jugador2.nom) {
                socket.emit("shaAfegitEquip", { shaAfegit: false, rao: "jugador" });
            } else {
                equip.assignarColorPeces();
                equips.push(equip);
                nomEquips.push(equip.nomEquip);
                socket.emit("shaAfegitEquip", { shaAfegit: true, rao: "equip" });
            }
        } else {
            socket.emit("shaAfegitEquip", { shaAfegit: false, rao: "equip" });
        }
    });

    socket.on('mourePeca', (info: informacioMourePeca) => {
        io.emit('pecaShaMogut', info);
    });

});


export interface jugadorPartida {
    jugador: Jugador;
    indexPartida: number;
    indexCementiri: number;
}

export interface informacioMourePeca {
    indexPartida: number;
    indexCementiri: number;
    posicioInicial: { x: number, y: number };
    posicioFinal: { x: number, y: number };
    sala: string;
}

export interface informacioPartida {
    contrincants1: Contrincant;
    contrincants2: Contrincant;
    equips: Array<Equip>;
    sala: string;
}