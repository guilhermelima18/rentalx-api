import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const teste = this.createCategoryUseCase.execute({ name, description });
    console.log(teste);

    return response.status(201).json(teste);
  }
}

export { CreateCategoryController };