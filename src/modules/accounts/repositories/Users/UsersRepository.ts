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
    id,
    name,
    username,
    password,
    email,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      username,
      password,
      email,
      driver_license,
      avatar,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }

  async findById(userId: string): Promise<User> {
    return await this.repository.findOne({ id: userId });
  }
}

export { UsersRepository };
