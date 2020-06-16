import TaskRepository from "../../domain/repository";
import Task, { TaskPriority } from "../../domain/task";
import MongoDBTask from "./task";
import Model from "../../../user/infrastructure/mongodb/model";
import MongoDBUser from "../../../user/infrastructure/mongodb/user";

export default class MongoDBTaskRepository implements TaskRepository {
  public async save(task: Task, user: MongoDBUser): Promise<MongoDBTask> {
    const userModel = await Model.findById(user.id).orFail();

    await userModel.tasks.push(task);
    await userModel.save();

    const taskModel = userModel.tasks[userModel.tasks.length - 1];

    const taskResponse: MongoDBTask = {
      id: taskModel._id,
      name: taskModel.name,
      priority: taskModel.priority as TaskPriority,
      dueDate: taskModel.dueDate,
      done: taskModel.done,
    };

    return taskResponse;
  }
}
