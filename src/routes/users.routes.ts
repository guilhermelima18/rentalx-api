import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/Users/createUser/CreateUserController";

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post("/users", createUserController.handle);

export { usersRoutes };
