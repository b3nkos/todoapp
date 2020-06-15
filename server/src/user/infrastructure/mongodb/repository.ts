import UserRepository from "../../domain/repository";
import User from "../../domain/user";
import Model from "./model";
import MongoDBUser from "./user";

export default class MongoDBUserRepository implements UserRepository {
  public async save(user: User): Promise<MongoDBUser> {
    const userModel = new Model(user);
    const userCreated = await userModel.save();
    return {
      id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      tasks: [],
    };
  }

  public async find(email: string): Promise<MongoDBUser | null> {
    const userModel = await Model.findOne({ email });

    if (userModel === null) {
      return null;
    }

    return {
      id: userModel._id,
      name: userModel.name,
      email: userModel.email,
    };
  }
}
