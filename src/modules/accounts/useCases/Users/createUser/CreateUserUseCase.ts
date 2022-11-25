import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../dto/ICreateUserDto";
import { UsersRepository } from "../../../repositories/Users/UsersRepository";

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
      throw new Error("Esse usuário já existe.");
    }

    return this.usersRepository.create({
      name,
      username,
      password,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
