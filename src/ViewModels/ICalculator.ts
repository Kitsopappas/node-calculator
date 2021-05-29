export interface ICalculator {
    timestamp: number;
    calculationType: string;
    error?: string;
    result: () => number;
    json: {timestamp: number, error?: string, result: number, calculationType: string};
  }