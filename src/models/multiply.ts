import { EquationInterface } from "./interfaces/equation";

export class MultiplyModel implements EquationInterface
{
    numberOne: number;
    numberTwo: number;

    constructor(numberOne: number, numberTwo: number) 
    {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    getResult(): number 
    {
        return this.numberOne * this.numberTwo;
    }
}