import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  listById(id: string) {
    const category = this.categories.filter((category) => category.id === id);
    return category;
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
