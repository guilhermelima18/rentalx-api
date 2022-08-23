import { Category } from "../../model/Category";

interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  listById(categoryId: string): Category;
  create({ name, description }: ICreateCategoriesDTO): void;
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoriesDTO };
