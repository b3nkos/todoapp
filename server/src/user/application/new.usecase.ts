import UserRepository from "../domain/repository";
import NewUserRequest from "../domain/request";
import User from "../domain/user";
import NewUserResponse from "../domain/response";

export default class CreateNewUserUseCase {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async execute(request: NewUserRequest): Promise<NewUserResponse> {
    try {
      const user: User = await this.repository.save(request.user);
      return {
        user,
      };
    } catch (error) {
      throw error;
    }
  }
}
