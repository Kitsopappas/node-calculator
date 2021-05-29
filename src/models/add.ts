import {AddInterface} from "./interfaces/add"

export class AddModel implements AddInterface
{
    numberOne: number;
    numberTwo: number;

    constructor(numberOne: number, numberTwo: number) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    getResult(): number {
        return this.numberOne + this.numberTwo;
    }
}