import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { ISpecificationRepository } from "../../../repositories/Specifications/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const nameAlreadyExists = await this.specificationRepository.findByName(
      name
    );

    if (nameAlreadyExists) {
      throw new AppError("Essa especificação já existe.");
    }

    return this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
