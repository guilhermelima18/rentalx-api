import { CategoriesRepository } from "../repositories/Categories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Essa categoria já existe.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
