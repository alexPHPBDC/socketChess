import { IContrincant } from "../Interface/IContrincant";
import { IEquip } from "../Interface/IEquip";
import { IJugador } from "../Interface/IJugador";
import { Jugador } from "./Jugador";

export class Contrincant implements IContrincant{
    nomVersus: string;
    jugadorBlanc: IJugador;
    jugadorNegre: IJugador;

    constructor(nomVersus: string, jugadorBlanc: Jugador,jugadorNegre: Jugador){
        this.nomVersus = nomVersus;
        this.jugadorBlanc = jugadorBlanc;
        this.jugadorNegre = jugadorNegre;
    }
    
}