import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoryByIdUseCase } from "./ListCategoryByIdUseCase";

class ListCategoryByIdController {
  async handle(request: Request, response: Response) {
    const listCategoryByIdUseCase = container.resolve(ListCategoryByIdUseCase);
    const { id } = request.params;

    const category = await listCategoryByIdUseCase.execute(id);

    return response.status(200).json(category);
  }
}

export { ListCategoryByIdController };
