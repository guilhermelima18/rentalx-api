import { inject, injectable } from "tsyringe";
import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";

@injectable()
class ListCategoryByIdUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute(id: string) {
    const category = await this.categoriesRepository.listById(id);

    return category;
  }
}

export { ListCategoryByIdUseCase };
