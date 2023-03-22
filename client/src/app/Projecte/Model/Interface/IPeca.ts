import { colorPeca, PecaNom } from "../../Utils/Enums/enums";

export interface IPeca{
    color: colorPeca;
    nom: PecaNom;
    imatge: string;
    posicio: number;
}