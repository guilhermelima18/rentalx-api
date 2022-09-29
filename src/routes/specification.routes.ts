import { Request, Response, Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/Specifications/createSpecification";
import { listSpecificationByIdController } from "../modules/cars/useCases/Specifications/listSpecificationById";
import { listSpecificationsController } from "../modules/cars/useCases/Specifications/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.get(
  "/specifications",
  (request: Request, response: Response) => {
    console.log("Reload");
    return listSpecificationsController.handle(request, response);
  }
);

specificationRoutes.get(
  "/specifications/:id",
  (request: Request, response: Response) => {
    const specification = listSpecificationByIdController.handle(
      request,
      response
    );

    return response.status(200).json(specification);
  }
);

specificationRoutes.post(
  "/specifications",
  (request: Request, response: Response) => {
    return createSpecificationController.handle(request, response);
  }
);

export { specificationRoutes };
