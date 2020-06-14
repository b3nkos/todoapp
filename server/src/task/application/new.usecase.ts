import TaskRepository from "../domain/repository";
import NewTaskRequest from "../domain/request";
import Task from "../domain/task";
import NewTaskResponse from "../domain/response";

export default class CreateNewTaskUseCase {
  private repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  public async execute(request: NewTaskRequest): Promise<NewTaskResponse> {
    try {
      const task: Task = await this.repository.save(request.task);
      return {
        task,
      };
    } catch (error) {
      throw error;
    }
  }
}
