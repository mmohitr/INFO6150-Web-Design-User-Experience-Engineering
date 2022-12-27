import AppState from './../State'
import { todoActionType } from '../Actions/Todo'

const reducer = (state = AppState, action) => {
    const type = action.type;
    const payload = action.payload
    let newTodos;
    switch(type){
        case todoActionType.ADD_TODO:
            newTodos = [...state.todos];
            newTodos.push(payload);
            break;

        case todoActionType.ADD_MANY_TODO:
            newTodos =[...state.todos,...payload];
            break;

        case todoActionType.DELETE_TODO:
            const filtered = state.todos.filter(t => t !== payload);
            newTodos = [...filtered];
            break;

        default:
            newTodos = [...state.todos];
            break;
    }
    return Object.assign({}, state, {todos: newTodos});
}

export default reducer;