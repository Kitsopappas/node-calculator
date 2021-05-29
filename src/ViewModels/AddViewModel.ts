import { AddModel } from "../models/add"
import { ICalculator } from "./ICalculator";

export class AddViewModel implements ICalculator {
  private addModel: AddModel;
  public calculationType = "addition";
  public error?: string;

  constructor(numberOne: number, numberTwo: number) {
    this.addModel = new AddModel(numberOne, numberTwo);
  }

  get timestamp(): number {
    return new Date().getTime();
  }

  result(): number {
    return this.addModel.getResult();
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