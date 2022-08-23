import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
