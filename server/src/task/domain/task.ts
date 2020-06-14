export enum TaskPriority {
  Hight,
  Medium,
  Low,
}

export default interface Task {
  name: string;
  priority: TaskPriority;
  dueDate: Date;
}
