import User from "../../domain/user";

export default interface MongoDBUser extends User {
  id: string;
}
