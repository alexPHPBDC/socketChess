import { IJugador } from "./IJugador";

export interface IEquip{
    nomEquip: string;
    jugador1: IJugador;
    jugador2: IJugador;
    assignarColorPeces(): void;
}