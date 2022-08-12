import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  list(): Specification[] {
    return this.specifications;
  }

  listById(specificationId: string): Specification {
    return this.specifications.find(
      (specification) => specification.id === specificationId
    );
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specificationName = this.specifications.find(
      (specification) => specification.name.toLowerCase() === name.toLowerCase()
    );

    return specificationName;
  }
}

export { SpecificationRepository };
