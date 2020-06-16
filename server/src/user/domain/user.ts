import Task from "../../task/domain/task";

export default interface User {
  name: string;
  email: string;
  password: string;
  tasks: Array<Task>;
}
