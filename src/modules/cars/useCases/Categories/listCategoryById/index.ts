import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";
import { ListCategoryByIdController } from "./ListCategoryByIdController";
import { ListCategoryByIdUseCase } from "./ListCategoryByIdUseCase";

export default (): ListCategoryByIdController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoryByIdUseCase = new ListCategoryByIdUseCase(
    categoriesRepository
  );
  const listCategoryByIdController = new ListCategoryByIdController(
    listCategoryByIdUseCase
  );

  return listCategoryByIdController;
};
