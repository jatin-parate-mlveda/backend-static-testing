import { Todo } from './todos.model';

export const getAll = async () => Todo.find({}).lean();

export const create = async data => new Todo(data).save();
