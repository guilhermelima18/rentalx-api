import fs from "fs";
import { parse } from "csv-parse";
import { ICategoriesRepository } from "../../../repositories/Categories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
