import TaskRepository from "../domain/repository";
import NewTaskRequest from "../domain/request";
import NewTaskResponse from "../domain/response";
import UserSearcherService from "../../user/application/searcher.service";

export default class CreatorTaskService {
  private repository: TaskRepository;
  private userSearcher: UserSearcherService;

  constructor(repository: TaskRepository, userSearcher: UserSearcherService) {
    this.repository = repository;
    this.userSearcher = userSearcher;
  }

  public async execute(request: NewTaskRequest): Promise<NewTaskResponse> {
    try {
      const user = await this.userSearcher.execute(request.userEmail);

      if (user === null) {
        throw new Error("The user is requires for tasks attaching");
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
