import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../../repositories/Users/IUsersRepository";
import { AppError } from "../../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Vefica se o e-mail do usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("E-mail ou senha incorretos.");
    }

    // Faz a comparação da senha do usuário cadastrada no banco com a senha passada
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("E-mail ou senha incorretos.");
    }

    // Gera o token
    const token = sign({}, "a7b71b7b48466113992530a9900c2462", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
