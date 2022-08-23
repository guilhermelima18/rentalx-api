import { SpecificationRepository } from "../../../repositories/Specifications/SpecificationRepository";
import { ListSpecificationsController } from "./listSpecificationsController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
