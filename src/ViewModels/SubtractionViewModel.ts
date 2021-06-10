import { SubtractionModel } from "../models/subtraction";
import { ICalculator } from "./ICalculator";

export class SubtractionViewModel implements ICalculator {
  private subtractionModel: SubtractionModel;
  public calculationType = "addition";
  public error?: string;

  constructor(numberOne: number, numberTwo: number) {
    this.subtractionModel = new SubtractionModel(numberOne, numberTwo);
  }

  get timestamp(): number {
    return new Date().getTime();
  }

  result(): number {
    return this.subtractionModel.getResult();
  }

  get json(): { timestamp: number, error?: string, result: number, calculationType: string } {
    let res =  {
      timestamp: this.timestamp,
      error: this.error,
      result: this.result(),
      calculationType: this.calculationType
    };
    return res;
  }
}