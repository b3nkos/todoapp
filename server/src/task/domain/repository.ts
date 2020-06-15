import Task from "./task";
import User from "../../user/domain/user";

export default interface TaskRepository {
  save(task: Task, user: User): Promise<Task>;
}
