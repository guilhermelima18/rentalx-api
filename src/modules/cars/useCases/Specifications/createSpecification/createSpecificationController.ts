import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response) {
    const createCategoryUseCase = container.resolve(CreateSpecificationUseCase);
    const { name, description } = request.body;

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
