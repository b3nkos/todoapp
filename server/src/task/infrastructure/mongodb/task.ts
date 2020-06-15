import Task from "../../domain/task";

export default interface MongoDBTask extends Task {
  id: string;
}
