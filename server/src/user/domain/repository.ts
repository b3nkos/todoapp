import User from "./user";

export default interface UserRepository {
  save(user: User): Promise<User>;
}
