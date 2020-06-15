import UserRepository from "../domain/repository";
import User from "../domain/user";

export default class UserSearcherService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async execute(email: string): Promise<User | null> {
    const userModel = await this.repository.find(email);
    return userModel;
  }
}
