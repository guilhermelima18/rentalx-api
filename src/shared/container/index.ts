import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/Categories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/Categories/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/Specifications/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/Specifications/SpecificationRepository";
import { UsersRepository } from "../../modules/accounts/repositories/Users/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/Users/IUsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
