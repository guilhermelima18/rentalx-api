import { SpecificationRepository } from "../../../repositories/Specifications/SpecificationRepository";
import { ListSpecificationByIdController } from "./listSpecificationByIdController";
import { ListSpecificationByIdUseCase } from "./listSpecificationByIdUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationByIdUseCase = new ListSpecificationByIdUseCase(
  specificationRepository
);
const listSpecificationByIdController = new ListSpecificationByIdController(
  listSpecificationByIdUseCase
);

export { listSpecificationByIdController };
