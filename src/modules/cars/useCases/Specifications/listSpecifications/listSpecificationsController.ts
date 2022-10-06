import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

class ListSpecificationsController {
  async handle(request: Request, response: Response) {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const allSpecifications = await listSpecificationsUseCase.execute();

    return response.json(allSpecifications);
  }
}

export { ListSpecificationsController };
