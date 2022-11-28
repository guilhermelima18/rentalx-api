import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  async listById(id: string): Promise<Specification> {
    const specification = await this.repository.findOne({ id });

    return specification;
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specificationName = await this.repository.findOne({ name });

    return specificationName;
  }
}

export { SpecificationRepository };
