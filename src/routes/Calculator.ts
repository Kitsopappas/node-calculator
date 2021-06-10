import { Request, Response, Router, NextFunction } from "express";
import { AddViewModel } from '../ViewModels/AddViewModel';
import { MultiplyViewModel } from '../ViewModels/MultiplyViewModel';
import { SubtractionViewModel } from '../ViewModels/SubtractionViewModel';

export const router = Router();
export class CalculatorRouter {

    router: Router

    /**
     * Initialize the Router
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    addTwoNumbers(req: Request, res: Response, next: NextFunction) 
    {
        let x: number = +req.params.numberOne;
        let y: number = +req.params.numberTwo;

        let addViewModel = new AddViewModel(x, y);
        res.status(200).send(addViewModel.json);
    }

    multiplyTwoNumbers(req: Request, res: Response, next: NextFunction) 
    {
        let x: number = +req.params.numberOne;
        let y: number = +req.params.numberTwo;

        let multiplyViewModel = new MultiplyViewModel(x, y);
        res.status(200).send(multiplyViewModel.json);
    }

    subtractTwoNumbers(req: Request, res: Response, next: NextFunction) {
        let x: number = +req.params.numberOne;
        let y: number = +req.params.numberTwo;

        let subtractionViewModel = new SubtractionViewModel(x, y);
        res.status(200).send(subtractionViewModel.json);
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() 
    {
        this.router.post('/add/:numberOne/:numberTwo', this.addTwoNumbers);
        this.router.post('/multiply/:numberOne/:numberTwo', this.multiplyTwoNumbers);
        this.router.post('/subtract/:numberOne/:numberTwo', this.subtractTwoNumbers);
    }
}

// Create the CalculatorRouter, and export its configured Express.Router
const calculatorRouter = new CalculatorRouter();
calculatorRouter.init();

export default calculatorRouter.router;