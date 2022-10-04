import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Essa categoria já existe.");
    }

    return this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
