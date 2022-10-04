import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";

class ListCategoryByIdUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(id: string) {
    const category = await this.categoriesRepository.listById(id);

    return category;
  }
}

export { ListCategoryByIdUseCase };
