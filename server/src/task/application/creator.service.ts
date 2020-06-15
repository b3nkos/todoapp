import TaskRepository from "../domain/repository";
import NewTaskRequest from "../domain/request";
import NewTaskResponse from "../domain/response";
import UserSearcherService from "../../user/application/searcher.service";

export default class CreatorTaskService {
  private repository: TaskRepository;
  private finder: UserSearcherService;

  constructor(repository: TaskRepository, finder: UserSearcherService) {
    this.repository = repository;
    this.finder = finder;
  }

  public async execute(request: NewTaskRequest): Promise<NewTaskResponse> {
    try {
      const user = await this.finder.execute(request.userEmail);

      if (user === null) {
        throw new Error(`User with email ${request.userEmail} not found`);
      }

      const task = await this.repository.save(request.task, user);
      const response: NewTaskResponse = {
        task,
      };
      return response;
    } catch (error) {
      throw error;
    }
  }
}
