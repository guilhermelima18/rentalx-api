import { Router, Request, Response } from "express";
import { createCategoryController } from "../modules/cars/useCases/Categories/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/Categories/listCategories";
import { listCategoryByIdController } from "../modules/cars/useCases/Categories/listCategoryById";

const categoriesRoutes = Router();

categoriesRoutes.get("/categories", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.get(
  "/categories/:id",
  (request: Request, response: Response) => {
    return listCategoryByIdController.handle(request, response);
  }
);

categoriesRoutes.post("/categories", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
