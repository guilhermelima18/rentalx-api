import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository";
import { ListCategoryByIdController } from "./ListCategoryByIdController";
import { ListCategoryByIdUseCase } from "./ListCategoryByIdUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryByIdUseCase = new ListCategoryByIdUseCase(
  categoriesRepository
);
const listCategoryByIdController = new ListCategoryByIdController(
  listCategoryByIdUseCase
);

export { listCategoryByIdController };
