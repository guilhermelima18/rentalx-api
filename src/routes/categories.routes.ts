import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/Categories/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Categories/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/Categories/listCategories/ListCategoriesController";
import { ListCategoryByIdController } from "../modules/cars/useCases/Categories/listCategoryById/ListCategoryByIdController";

const listCategoriesController = new ListCategoriesController();
const listCategoryByIdController = new ListCategoryByIdController();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.get("/categories", listCategoriesController.handle);

categoriesRoutes.get("/categories/:id", listCategoryByIdController.handle);

categoriesRoutes.post("/categories", createCategoryController.handle);

categoriesRoutes.post(
  "/categories/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
