
import { IPartida } from "../Interface/IPartida";
import { IPeca } from "../Interface/IPeca";
import { Contrincant } from "./Contrincant";
import { Taulell } from "./Taulell";

export class Partida implements IPartida{
    taulell: Taulell;
    contrincants: Contrincant;
    torn: number = 0;
    
    constructor(contrincants: Contrincant){
        this.contrincants = contrincants;
        this.taulell = new Taulell();
    }

    get versus():string{
        return this.contrincants.nomVersus;
    }

    get negreNom():string{
        return this.contrincants.jugadorNegre.nom + "-" + this.contrincants.jugadorNegre.colorPeces;
    }

    get blancNom():string{
        return this.contrincants.jugadorBlanc.nom + "-" + this.contrincants.jugadorBlanc.colorPeces;
    }

    get numeros():string[]{
        return this.taulell.numeros;
    }

    get lletres():string[]{
        return this.taulell.lletres;
    }

    get cementiriBlanc():IPeca[]{
        return this.taulell.cementiris[0];
    }

    get cementiriNegre():IPeca[]{
        return this.taulell.cementiris[1];
    }
    




}