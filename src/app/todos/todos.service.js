import { Todo } from './todos.model.js';

export const getAll = async () => Todo.find({}).lean();

export const create = async data => new Todo(data).save();
