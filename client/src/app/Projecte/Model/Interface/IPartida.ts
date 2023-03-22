import { Taulell } from "../Implementation/Taulell";
import { IContrincant } from "./IContrincant";

export interface IPartida{
    taulell: Taulell;
    contrincants: IContrincant;
    torn: number; 
}