import { ICasella } from "./ICasella";
import { IPeca } from "./IPeca";

export interface ITaulell{
    cementiris: Array<Array<IPeca>>;
    caselles: Array<Array<ICasella>>;
    lletres: Array<string>;
    numeros: Array<string>;

    posarColor():void;
    posarPeces():void;
}