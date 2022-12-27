import './Todos.scss'
import TodoItem from './Todo-Item/Todo-Item'
import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../Store/Actions/Todo';
import { getTodos } from '../services/todos-service';

const mapStoreToProps = (state) => ({todos: state.todos});

const mapDispatchToProps =(dispatch) =>{
    return {
        addTodo : todos => dispatch(addTodoAction(todos))
    }
}

class TodosComponent extends React.Component{
    componentDidMount(){
        getTodos().then((response) => response.json())
        .then((data) => data.map(todo => this.props.addTodo(todo)));
    }

    // returns html consisting of list of todo items
    render(){
        const todos = this.props.todos;
        const items = todos.map((t, i) =>
        <TodoItem
            key = {i}
            todo = {t.title}
            index = {i}
            selectedHandler = {this.props.selectedHandler}>
        </TodoItem>);
        return(
        <ol>
            {items}
        </ol>
        )
    }
}

// connects component to redux store
const Todos = connect(mapStoreToProps, mapDispatchToProps)(TodosComponent);

export default Todos;