import Task from "./task";
import User from "../../user/domain/user";

export default interface NewTaskRequest {
  task: Task;
  userEmail: string;
}
