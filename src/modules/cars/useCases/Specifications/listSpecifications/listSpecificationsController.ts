import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response) {
    const allSpecifications = this.listSpecificationsUseCase.execute();

    return response.json(allSpecifications);
  }
}

export { ListSpecificationsController };
