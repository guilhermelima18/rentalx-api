import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/Users/authenticateUser/AuthenticateUserController";

const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/sessions", authenticateUserController.handle);

export { authenticationRoutes };
