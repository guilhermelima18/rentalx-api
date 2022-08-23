import { Category } from "../../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  list(): Category[] {
    return this.categories;
  }

  listById(id: string): Category {
    return this.categories.find((category) => category.id === id);
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  findByName(name: string) {
    const category = this.categories.find(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );
    return category;
  }
}

export { CategoriesRepository };
