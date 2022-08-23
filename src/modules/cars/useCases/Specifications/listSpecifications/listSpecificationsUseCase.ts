import { ISpecificationRepository } from "../../../repositories/Specifications/ISpecificationRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute() {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationsUseCase };
