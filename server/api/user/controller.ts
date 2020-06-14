import CreateNewUserUseCase from "../../src/user/application/new.usecase";
import UserInMemoryRepository from "../../src/user/infrastructure/inmemory.repository";
import User from "../../src/user/domain/user";
import MongoDBUser from "../../src/user/infrastructure/mongodb/user/user";
import NewUserRequest from "../../src/user/domain/request";
import NewUserResponse from "../../src/user/domain/response";
import MongoDBUserRepository from "../../src/user/infrastructure/mongodb/user/repository";

export default class UserController {
  private useCase: CreateNewUserUseCase;

  constructor() {
    this.useCase = new CreateNewUserUseCase(new MongoDBUserRepository());
  }

  public async save(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    try {
      const request: NewUserRequest = {
        user: {
          name,
          email,
          password,
        },
      };

      const response: NewUserResponse = await this.useCase.execute(request);

      return response.user;
    } catch (error) {
      throw error;
    }
  }
}
