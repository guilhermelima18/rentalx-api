import { ISpecificationRepository } from "../repositories/Specifications/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Essa especificação já existe.");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
