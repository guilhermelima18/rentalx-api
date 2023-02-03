import { ICreateUserDTO } from "../../dto/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../Users/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(userId: string): Promise<User> {
    return this.users.find((user) => user.id === userId);
  }
}

export { UsersRepositoryInMemory };
