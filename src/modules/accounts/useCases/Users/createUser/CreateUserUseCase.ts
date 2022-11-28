import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../../dto/ICreateUserDto";
import { UsersRepository } from "../../../repositories/Users/UsersRepository";
import { AppError } from "../../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("Esse usuário já existe.");
    }

    const passwordHash = await hash(password, 8);

    return this.usersRepository.create({
      name,
      username,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
