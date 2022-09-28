import { Router, Request, Response } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/Categories/createCategory";
import { importCategoryController } from "../modules/cars/useCases/Categories/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/Categories/listCategories";
import { listCategoryByIdController } from "../modules/cars/useCases/Categories/listCategoryById";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

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

categoriesRoutes.post(
  "/categories/import",
  upload.single("file"),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  }
);

export { categoriesRoutes };
