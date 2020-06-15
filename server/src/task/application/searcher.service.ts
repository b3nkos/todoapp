import TaskRepository from "../domain/repository";
import Task from "../domain/task";

export default class TaskSearcherService {
  private repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  public async execute(email: string): Promise<Task | null> {
    const userModel = await this.repository.find(email);
    return userModel;
  }
}
