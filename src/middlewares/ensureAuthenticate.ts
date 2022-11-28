import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/Users/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token não existe", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "a7b71b7b48466113992530a9900c2462"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError("Usuário não existe.", 401);
    }

    request.user = {
      id: user.id,
    };

    next();
  } catch (error) {
    throw new AppError("Token inválido.", 401);
  }
}
