import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/accounts/useCases/Users/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/Users/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import uploadConfig from "../config/upload";

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/users", createUserController.handle);

usersRoutes.patch(
  "/users/avatar",
  ensureAuthenticate,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
