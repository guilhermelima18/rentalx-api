import { Router } from "express";
import { authenticationRoutes } from "./authentication.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(authenticationRoutes);
router.use(categoriesRoutes);
router.use(specificationRoutes);
router.use(usersRoutes);

export { router };
