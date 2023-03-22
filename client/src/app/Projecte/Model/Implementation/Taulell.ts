
import { Peces } from "../../Utils/Constants/constants";
import { colorCasella, colorPeca } from "../../Utils/Enums/enums";
import { ICasella } from "../Interface/ICasella";
import { IPeca } from "../Interface/IPeca";
import { ITaulell } from "../Interface/ITaulell";
import { Casella } from "./Casella";
import { Peca } from "./Peca";

export class Taulell implements ITaulell {
    caselles: ICasella[][] = [];
    cementiris: Array<Array<IPeca>> = [];
    lletres: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H"];
    numeros: Array<string> = ["8", "7", "6", "5", "4", "3", "2", "1"];
    constructor() {
        this.cementiris[0] = new Array<IPeca>();
        this.cementiris[1] = new Array<IPeca>();

        for (let i = 0; i < 8; i++) {
            this.caselles[i] = new Array<ICasella>();
            for (let j = 0; j < 8; j++) {
                this.caselles[i][j] = new Casella(i, j);
            }
        }

        this.posarPeces();
        this.posarColor();
    }

    static crearTaulellInvers(Taulell: Taulell): Taulell {
        let TaulellInvers = new this();
        for (let i = 0; i < Taulell.caselles.length; i++) {
            TaulellInvers.caselles[i] = new Array<ICasella>();
            for (let j = 0; j < Taulell.caselles.length; j++) {

                TaulellInvers.caselles[i][j] = Taulell.caselles[7 - i][7 - j];
            }
        }
        TaulellInvers.lletres = Taulell.lletres.slice().reverse();
        TaulellInvers.numeros = Taulell.numeros.slice().reverse();
        return TaulellInvers;
    }

    posarPeces():void {
        for (let i = 0; i < 8; i++) {
            if (i < 2) {
                for (let j = 0; j < 8; j++) {
                    this.caselles[i][j].peca = new Peca(colorPeca.Negra, Peces[i][j].nom, Peces[i][j].imatge, i);
                }
            }

            if (i > 5) {
                for (let j = 0; j < 8; j++) {
                    this.caselles[i][j].peca = new Peca(colorPeca.Blanca, Peces[i - 4][j].nom, Peces[i - 4][j].imatge, i);
                }
            }
        }
    }

    posarColor():void {
        let colorsParells = [colorCasella.Blanca, colorCasella.Groga];
        let colorsSenars = [colorCasella.Groga, colorCasella.Blanca];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i % 2 == 0) {
                    this.caselles[i][j].color = colorsParells[j % 2];
                } else {
                    this.caselles[i][j].color = colorsSenars[j % 2];
                }
            }
        }


    }

}