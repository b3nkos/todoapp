import UserRepository from "../../domain/repository";
import User from "../../domain/user";
import Model from "./model";
import MongoDBUser from "./user";
import Task, { TaskPriority } from "../../../task/domain/task";

export default class MongoDBUserRepository implements UserRepository {
  public async save(user: User): Promise<MongoDBUser> {
    const userCreated = await Model.create(user);
    return {
      id: userCreated._id,
      name: userCreated.name.toString(),
      email: userCreated.email.toString(),
      password: userCreated.password.toString(),
      tasks: [],
    };
  }

  public async find(email: string): Promise<MongoDBUser | null> {
    const userModel = await Model.findOne({ email });

    if (userModel === null) {
      return null;
    }

    const tasks: Array<Task> = userModel.tasks.map((taskModel) => {
      const task: Task = {
        name: taskModel.name,
        priority: taskModel.priority as TaskPriority,
        dueDate: taskModel.dueDate,
        done: taskModel.done,
      };

      return task;
    });

    return {
      id: userModel._id,
      name: userModel.name.toString(),
      email: userModel.email.toString(),
      password: userModel.password.toString(),
      tasks,
    };
  }
}
