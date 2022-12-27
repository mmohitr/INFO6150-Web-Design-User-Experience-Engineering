import Todo from './../models/todo.js';

// CREATE
export const save = (newTodo) => {
    const todo = new Todo(newTodo);
    return todo.save();
}

export const search = (query) => {
    const params = {...query};
    return Todo.find(params).exec();

}

// READ
export const get = (id) => {
    const todo = Todo.findById(id).exec();
    return todo;
}

// UPDATE
export const update = (updatedTodo, id) => {
    updatedTodo.lastModifiedDate = new Date();
    const todo = Todo.findByIdAndUpdate(id, updatedTodo, {new: true}).exec();
    return todo;
}

// DELETE
export const remove = (id) => {
    const todo = Todo.findByIdAndDelete(id).exec();
    return todo;
}

