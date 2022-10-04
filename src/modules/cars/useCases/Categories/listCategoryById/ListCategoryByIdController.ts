import { Request, Response } from "express";
import { ListCategoryByIdUseCase } from "./ListCategoryByIdUseCase";

class ListCategoryByIdController {
  constructor(private listCategoryByIdUseCase: ListCategoryByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const category = await this.listCategoryByIdUseCase.execute(id);

    return response.status(200).json(category);
  }
}

export { ListCategoryByIdController };
