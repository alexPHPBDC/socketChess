import { colorCasella } from "../../Utils/Enums/enums";
import { ICasella } from "../Interface/ICasella";
import { IPeca } from "../Interface/IPeca";

export class Casella implements ICasella{
    fila: number;
    columna: number;
    color: colorCasella | null;
    peca: IPeca | null;

    constructor(fila: number, columna: number){
        this.fila = fila;
        this.columna = columna;
        this.peca = null;
        this.color = null;
    }
}