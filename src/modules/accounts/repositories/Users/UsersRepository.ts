import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }
}

export { UsersRepository };
