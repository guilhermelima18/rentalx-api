import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoriesDTO,
} from "../Categories/ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async list(): Promise<Category[]> {
    const categories = await this.categories;

    return categories;
  }

  async listById(categoryId: string): Promise<Category> {
    const category = await this.categories.find(
      (category) => category.id === categoryId
    );

    return category;
  }

  async create({ name, description }: ICreateCategoriesDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.categories.find(
      (category) => category.name === name
    );

    return category;
  }
}

export { CategoriesRepositoryInMemory };
