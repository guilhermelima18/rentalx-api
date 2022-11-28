import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../../repositories/Specifications/ISpecificationRepository";

@injectable()
class ListSpecificationByIdUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute(id: string) {
    const specificationById = await this.specificationRepository.listById(id);

    return specificationById;
  }
}

export { ListSpecificationByIdUseCase };
