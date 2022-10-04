import { Category } from "../../entities/Category";

interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Promise<Category[]>;
  listById(categoryId: string): Promise<Category>;
  create({ name, description }: ICreateCategoriesDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoriesDTO };
