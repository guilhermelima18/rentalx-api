import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    const { id } = request.user;
    const avatarFile = request.file.filename;

    console.log(id);

    await updateUserAvatarUseCase.execute({ userId: id, avatarFile });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
