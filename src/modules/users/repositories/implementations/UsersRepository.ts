import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = { ...new User(), name, email };
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }

  turnAdmin(receivedUser: User): User {
    const index = this.users.findIndex((u) => u.id === receivedUser.id);
    if (index >= 0) {
      this.users[index] = { ...receivedUser, admin: true };
      return this.users[index];
    }
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
