import { Request, Response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specifications/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.get(
  "/specifications",
  (request: Request, response: Response) => {
    const allList = specificationRepository.list();

    return response.status(200).json(allList);
  }
);

specificationRoutes.get(
  "/specifications/:id",
  (req: Request, res: Response) => {
    const { id } = req.params;

    const specification = specificationRepository.listById(id);

    return res.status(200).json(specification);
  }
);

specificationRoutes.post(
  "/specifications",
  (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
      specificationRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
  }
);

export { specificationRoutes };
