import { Jugador } from "../Implementation/Jugador";

export interface IContrincant {
    nomVersus: string;
    jugadorBlanc: Jugador;
    jugadorNegre: Jugador;
}
