import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";

class ListCategoryByIdUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(id: string) {
    return this.categoriesRepository.listById(id);
  }
}

export { ListCategoryByIdUseCase };
