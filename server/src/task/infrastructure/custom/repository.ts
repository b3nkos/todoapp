import { v4 as uuidv4 } from "uuid";
import TaskRepository from "../../domain/repository";
import Task from "../../domain/task";
import User from "../../../user/domain/user";

export default class TaskInMemoryRepository implements TaskRepository {
  private database: Array<Task>;

  constructor() {
    this.database = [];
  }

  async save(task: Task, user: User): Promise<Task> {
    return new Promise((resolve) => {
      this.database.push(task);

      const newUser = { ...this.database[0], id: uuidv4() };
      resolve(newUser);
    });
  }
}
