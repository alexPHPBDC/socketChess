import { colorPeca } from "../../Utils/Enums/enums";
import { IEquip } from "../Interface/IEquip";
import { IJugador } from "../Interface/IJugador";

export class Equip implements IEquip{
    nomEquip: string;
    jugador1: IJugador;
    jugador2: IJugador;

    constructor(nomEquip: string, jugador1: IJugador, jugador2: IJugador){
        this.nomEquip = nomEquip;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }

    assignarColorPeces(): void {
        this.jugador1.colorPeces = colorPeca.Blanca;
        this.jugador2.colorPeces = colorPeca.Negra;
    }
}