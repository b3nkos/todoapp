import mongoose, { Schema, Document } from "mongoose";

interface TaskModel extends Document {
  name: string;
  priority: string;
  dueDate: Date;
}

const taskSchema = new Schema({
  name: { type: String, required: true },
  priority: { type: String, required: true },
  dueDate: { type: Date, required: true },
});

export default mongoose.model<TaskModel>("Task", taskSchema);
