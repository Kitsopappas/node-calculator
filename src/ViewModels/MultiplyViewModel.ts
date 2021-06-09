import { MultiplyModel } from "../models/multiply";
import { ICalculator } from "./ICalculator";

export class MultiplyViewModel implements ICalculator {
  private multiplyModel: MultiplyModel;
  public calculationType = "addition";
  public error?: string;

  constructor(numberOne: number, numberTwo: number) {
    this.multiplyModel = new MultiplyModel(numberOne, numberTwo);
  }

  get timestamp(): number {
    return new Date().getTime();
  }

  result(): number {
    return this.multiplyModel.getResult();
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