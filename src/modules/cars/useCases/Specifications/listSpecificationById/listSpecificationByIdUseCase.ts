import { ISpecificationRepository } from "../../../repositories/Specifications/ISpecificationRepository";

class ListSpecificationByIdUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(id: string) {
    const specificationById = this.specificationRepository.listById(id);
    return specificationById;
  }
}

export { ListSpecificationByIdUseCase };
