import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/Specifications/createSpecification/createSpecificationController";
import { ListSpecificationByIdController } from "../modules/cars/useCases/Specifications/listSpecificationById/listSpecificationByIdController";
import { ListSpecificationsController } from "../modules/cars/useCases/Specifications/listSpecifications/listSpecificationsController";

const listSpecificationsController = new ListSpecificationsController();
const specificationByIdController = new ListSpecificationByIdController();
const createSpecificationController = new CreateSpecificationController();

const specificationRoutes = Router();

specificationRoutes.get("/specifications", listSpecificationsController.handle);

specificationRoutes.get(
  "/specifications/:id",
  specificationByIdController.handle
);

specificationRoutes.post(
  "/specifications",
  createSpecificationController.handle
);

export { specificationRoutes };
