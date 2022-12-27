// actions that can be performed on a todo
export const todoActionType = {
    ADD_TODO: '[Todo] Add Todo',
    UPDATE_TODO: '[Todo] Update Todo',
    DELETE_TODO: '[Todo] Delete Todo',
    ADD_MANY_TODO: '[Todo] Add Many Todo'
}

export const addTodoAction = (payload) => ({type: todoActionType.ADD_TODO, payload})
export const addManyTodoAction = (payload) =>({type: todoActionType.ADD_MANY_TODO,payload})
export const updateTodoAction = (payload) => ({type: todoActionType.UPDATE_TODO, payload})
export const deleteTodoAction = (payload) => ({type: todoActionType.DELETE_TODO, payload})
