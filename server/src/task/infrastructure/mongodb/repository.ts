import TaskRepository from "../../domain/repository";
import Task, { TaskPriority } from "../../domain/task";
import MongoDBTask from "./task";
import * as TaskModel from "./model";
import * as UserModel from "../../../user/infrastructure/mongodb/model";
import User from "../../../user/domain/user";
import MongoDBUser from "../../../user/infrastructure/mongodb/user";

export default class MongoDBTaskRepository implements TaskRepository {
  public async save(task: Task, user: MongoDBUser): Promise<MongoDBTask> {
    const taskCreated = await TaskModel.default.create({
      name: task.name,
      dueDate: task.dueDate,
      priority: task.priority,
    });

    const userModel = await UserModel.default.findOne({ email: user.email });
    userModel?.tasks.push(taskCreated._id);
    userModel?.save();

    const taskResponse: MongoDBTask = {
      id: taskCreated._id,
      name: taskCreated.name,
      priority: taskCreated.priority as TaskPriority,
      dueDate: taskCreated.dueDate,
    };

    return taskResponse;
  }
}
