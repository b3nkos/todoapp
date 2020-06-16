import NewTaskRequest from "../../../src/task/domain/request";
import { TaskPriority } from "../../../src/task/domain/task";
import NewTaskResponse from "../../../src/task/domain/response";
import CreatorTaskService from "../../../src/task/application/creator.service";
import TaskInMemoryRepository from "../../../src/task/infrastructure/custom/repository";
import UserSearcherService from "../../../src/user/application/searcher.service";
import UserInMemoryRepository from "../../../src/user/infrastructure/custom/repository";
import NewUserRequest from "../../../src/user/domain/request";
import UserCreatorService from "../../../src/user/application/creator.service";
import NewUserResponse from "../../../src/user/domain/response";

describe("The creation of a new task", () => {
  it("should return the created task", async () => {
    const repository = new UserInMemoryRepository();
    const searcherService = new UserSearcherService(repository);

    const userCreatorService = new UserCreatorService(
      repository,
      searcherService
    );

    const newUserRequest: NewUserRequest = {
      user: {
        name: "Jon Doe",
        email: "jondoe@gmail.com",
        password: "123456",
        tasks: [],
      },
    };

    await userCreatorService.execute(newUserRequest);

    const taskCreatorService = new CreatorTaskService(
      new TaskInMemoryRepository(),
      searcherService
    );

    const newTaskRequest: NewTaskRequest = {
      task: {
        name: "Task 1",
        priority: TaskPriority.Hight,
        dueDate: new Date(),
      },
      userEmail: "jondoe@gmail.com",
    };

    const newTaskResponse: NewTaskResponse = await taskCreatorService.execute(
      newTaskRequest
    );
    expect(newTaskResponse.task.name).toBe("Task 1");
    expect(newTaskResponse.task.priority).toBe(TaskPriority.Hight);
  });
});
