import { ICreateUserDTO } from "../../dto/ICreateUserDto";
import { User } from "../../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(userId: string): Promise<User>;
}

export { IUsersRepository };
