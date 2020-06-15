import mongoose, { Schema, Document } from "mongoose";

interface UserSchema extends Document {
  name: string;
  email: string;
  tasks: Array<string>;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

export default mongoose.model<UserSchema>("User", userSchema);
