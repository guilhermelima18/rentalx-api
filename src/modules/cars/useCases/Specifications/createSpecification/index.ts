import { SpecificationRepository } from "../../../repositories/Specifications/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };