import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use(categoriesRoutes);
router.use(specificationRoutes);

export { router };
