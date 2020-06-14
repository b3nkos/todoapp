import Task from "./task";

export default interface TaskRepository {
  save(task: Task): Promise<Task>;
}
