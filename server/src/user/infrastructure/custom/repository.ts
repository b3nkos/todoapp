import UserRepository from "../../domain/repository";
import User from "../../domain/user";
import { v4 as uuidv4 } from "uuid";

export default class UserInMemoryRepository implements UserRepository {
  private database: Array<User>;

  constructor() {
    this.database = [];
  }

  async save(user: User): Promise<User> {
    return new Promise((resolve) => {
      this.database.push(user);

      const newUser = { ...this.database[0], id: uuidv4() };
      resolve(newUser);
    });
  }

  public async find(email: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      if (this.database.length === 0) {
        resolve(null);
      }

      const user = this.database.find((user) => user.email === email);
      if (user === undefined) {
        reject(`User with email ${email} not found`);
      } else {
        resolve(user);
      }
    });
  }
}
