import CreatorTaskService from "../../src/task/application/creator.service";
import UserSearcherService from "../../src/user/application/searcher.service";
import MongoDBUserRepository from "../../src/user/infrastructure/mongodb/repository";
import Task, { TaskPriority } from "../../src/task/domain/task";
import MongoDBTaskRepository from "../../src/task/infrastructure/mongodb/repository";
import NewTaskRequest from "../../src/task/domain/request";
import NewTaskResponse from "../../src/task/domain/response";

export default class TaskController {
  private taskCreator: CreatorTaskService;
  private userSearcher: UserSearcherService;

  constructor() {
    this.userSearcher = new UserSearcherService(new MongoDBUserRepository());

    this.taskCreator = new CreatorTaskService(
      new MongoDBTaskRepository(),
      this.userSearcher
    );
  }

  public async save(
    name: string,
    priority: string,
    dueDate: Date,
    userEmail: string
  ): Promise<Task> {
    try {
      const request: NewTaskRequest = {
        task: {
          name,
          priority: priority as TaskPriority,
          dueDate,
        },
        userEmail,
      };

      const response: NewTaskResponse = await this.taskCreator.execute(request);

      return response.task;
    } catch (error) {
      throw error;
    }
  }
}
