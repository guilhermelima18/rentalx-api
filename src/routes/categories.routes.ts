import { Router, Request, Response } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/Categories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.get("/categories", (request: Request, response: Response) => {
  const allList = categoryRepository.list();

  return response.status(200).json(allList);
});

categoriesRoutes.get(
  "/categories/:id",
  (request: Request, response: Response) => {
    const { id } = request.params;
    const itemList = categoryRepository.listById(id);

    return response.status(200).json(itemList);
  }
);

categoriesRoutes.post("/categories", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
