import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationByIdUseCase } from "./listSpecificationByIdUseCase";

class ListSpecificationByIdController {
  async handle(request: Request, response: Response) {
    const listSpecificationByIdUseCase = container.resolve(
      ListSpecificationByIdUseCase
    );
    const { id } = request.params;

    const specification = await listSpecificationByIdUseCase.execute(id);

    return response.json(specification);
  }
}

export { ListSpecificationByIdController };
