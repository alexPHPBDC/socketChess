import { colorCasella } from "../../Utils/Enums/enums";
import { IPeca } from "./IPeca";

export interface ICasella{
    fila: number;
    columna: number;
    color: colorCasella | null;
    peca: IPeca | null;
}