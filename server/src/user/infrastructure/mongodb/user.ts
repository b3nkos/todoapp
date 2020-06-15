import User from "../../domain/user";
import MongoDBTask from "../../../task/infrastructure/mongodb/task";

export default interface MongoDBUser extends User {
  id: string;
  name: string;
  email: string;
  tasks?: Array<MongoDBTask>;
}
