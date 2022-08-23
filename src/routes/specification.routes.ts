import { Request, Response, Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/Specifications/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/Specifications/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.get(
  "/specifications",
  (request: Request, response: Response) => {
    return listSpecificationsController.handle(request, response);
  }
);

/* specificationRoutes.get(
  "/specifications/:id",
  (req: Request, res: Response) => {
    const { id } = req.params;

    const specification = specificationRepository.listById(id);

    return res.status(200).json(specification);
  }
); */

specificationRoutes.post(
  "/specifications",
  (request: Request, response: Response) => {
    return createSpecificationController.handle(request, response);
  }
);

export { specificationRoutes };
