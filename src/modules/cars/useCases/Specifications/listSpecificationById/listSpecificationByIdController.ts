import { Request, Response } from "express";
import { ListSpecificationByIdUseCase } from "./listSpecificationByIdUseCase";

class ListSpecificationByIdController {
  constructor(
    private listSpecificationByIdUseCase: ListSpecificationByIdUseCase
  ) {}

  handle(request: Request, response: Response) {
    const { id } = request.params;
    const specification = this.listSpecificationByIdUseCase.execute(id);

    return response.json(specification);
  }
}

export { ListSpecificationByIdController };
