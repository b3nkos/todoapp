import Task from "./task";
export default interface NewTaskRequest {
  task: Task;
  userEmail: string;
}
