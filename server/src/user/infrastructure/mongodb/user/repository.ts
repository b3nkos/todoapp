import UserRepository from "../../../domain/repository";
import User from "../../../domain/user";
import Model from "./model";
import MongoDBUser from "./user";

export default class MongoDBUserRepository implements UserRepository {
  public async save(user: User): Promise<User> {
    const userModel = new Model(user);
    const userCreated = await userModel.save();
    const mongoDBUser: MongoDBUser = {
      id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
    };

    return mongoDBUser;
  }
}
