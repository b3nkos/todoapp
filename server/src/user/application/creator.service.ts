import UserRepository from "../domain/repository";
import NewUserRequest from "../domain/request";
import NewUserResponse from "../domain/response";
import UserSearchService from "./searcher.service";

export default class UserCreatorService {
  private repository: UserRepository;
  private finder: UserSearchService;

  constructor(repository: UserRepository, finder: UserSearchService) {
    this.repository = repository;
    this.finder = finder;
  }

  public async execute(request: NewUserRequest): Promise<NewUserResponse> {
    try {
      const userFound = await this.finder.execute(request.user.email);

      if (userFound !== null) {
        throw new Error(`User with email ${request.user.email} already exist`);
      }

      const user = await this.repository.save(request.user);
      const response: NewUserResponse = {
        user,
      };
      return response;
    } catch (error) {
      throw error;
    }
  }
}
