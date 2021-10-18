import { Schema, model } from 'mongoose';

export const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: false, versionKey: false },
);

export const Todo = model('todo', TodoSchema);
