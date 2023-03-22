import { IJugador } from "../Interface/IJugador";

export class Jugador implements IJugador{
    nom: string;
    colorPeces!: string;
    constructor(nom: string){
        this.nom = nom;
    }

    
}