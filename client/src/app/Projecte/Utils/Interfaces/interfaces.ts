import { Contrincant } from "../../Model/Implementation/Contrincant";
import { Equip } from "../../Model/Implementation/Equip";
import { Jugador } from "../../Model/Implementation/Jugador";

export interface infoAfegir {
    shaAfegit: boolean;
    rao: string;
}

export interface jugadorPartida {
    jugador: Jugador;
    indexPartida: number;
    indexCementiri: number;
}

export interface informacioPartida {
    contrincants1: Contrincant;
    contrincants2: Contrincant;
    equips: Array<Equip>;
    indexPartida: number;
    sala: string;
}

export interface informacioMourePeca {
    indexCementiri: number;
    posicioInicial: { x: number, y: number };
    posicioFinal: { x: number, y: number };
    indexPartida: number;
    sala: string;
}