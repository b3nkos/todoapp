import UserCreatorService from "../../src/user/application/creator.service";
import UserInMemoryRepository from "../../src/user/infrastructure/custom/repository";
import User from "../../src/user/domain/user";
import MongoDBUser from "../../src/user/infrastructure/mongodb/user";
import NewUserRequest from "../../src/user/domain/request";
import NewUserResponse from "../../src/user/domain/response";
import MongoDBUserRepository from "../../src/user/infrastructure/mongodb/repository";
import UserSearcherService from "../../src/user/application/searcher.service";

export default class UserController {
  private creatorService: UserCreatorService;
  private searcherService: UserSearcherService;

  constructor() {
    this.searcherService = new UserSearcherService(new MongoDBUserRepository());

    this.creatorService = new UserCreatorService(
      new MongoDBUserRepository(),
      this.searcherService
    );
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
          tasks: [],
        },
      };

      const response: NewUserResponse = await this.creatorService.execute(
        request
      );

      return response.user;
    } catch (error) {
      throw error;
    }
  }
}
