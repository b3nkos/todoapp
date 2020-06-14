import UserRepository from "../domain/repository";
import User from "../domain/user";
import MongoDBUser from "./mongodb/user";
import { v4 as uuidv4 } from "uuid";

export default class UserInMemoryRepository implements UserRepository {
  private database: Array<User>;

  constructor() {
    this.database = [];
  }

  async save(user: User): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.database.push(user);

        const newUser: MongoDBUser = { ...this.database[0], id: uuidv4() };
        resolve(newUser);
      }, 100);
    });
  }
}
