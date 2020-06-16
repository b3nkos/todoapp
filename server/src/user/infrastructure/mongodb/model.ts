import mongoose, { Schema, Document, Types } from "mongoose";
import bcrypt from "bcrypt";

interface TaskSchema extends Types.Subdocument {
  name: string;
  priority: string;
  dueDate: Date;
  done: boolean;
}

interface UserSchema extends Document {
  name: String;
  email: String;
  password: String;
  tasks: Types.Array<TaskSchema>;
}

const taskSchema = new Schema({
  name: { type: String, required: true },
  priority: { type: String, required: true },
  dueDate: { type: Date, required: true },
  done: { type: Boolean, required: true, default: false },
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: [taskSchema],
});

userSchema.pre<UserSchema>("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

export default mongoose.model<UserSchema>("User", userSchema);
