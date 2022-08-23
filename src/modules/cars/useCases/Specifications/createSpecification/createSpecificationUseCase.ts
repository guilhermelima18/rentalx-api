import { ISpecificationRepository } from "../../../repositories/Specifications/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const nameAlreadyExists = this.specificationRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Esse nome de especificação já existe.");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
