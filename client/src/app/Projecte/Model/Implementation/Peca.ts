import { colorPeca, PecaNom } from "../../Utils/Enums/enums";
import { IPeca } from "../Interface/IPeca";

export class Peca implements IPeca{
    color: colorPeca;
    nom: PecaNom;
    imatge: string;
    posicio: number;
    constructor(color: colorPeca, nom: PecaNom, imatge: string, posicio: number){
        this.color = color;
        this.imatge = imatge;
        this.posicio = posicio;
        this.nom = nom;
    }

}