export enum TaskPriority {
  Hight = "Hight",
  Medium = "Medium",
  Low = "Low",
}

export default interface Task {
  name: string;
  priority: TaskPriority;
  dueDate: Date;
  done?: boolean;
}
