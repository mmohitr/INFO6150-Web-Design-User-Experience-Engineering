import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './Reducers/Todo-Reducer';

export const store = configureStore({
    reducer: todosReducer
})