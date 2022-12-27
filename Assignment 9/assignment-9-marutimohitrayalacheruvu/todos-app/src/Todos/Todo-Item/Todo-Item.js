import React from 'react';
import './Todo-Item.scss'
import { deleteTodoAction } from './../../Store/Actions/Todo'
import { connect } from 'react-redux';
import { updateTodo } from '../../services/todos-service';

const mapStoreToProps = (state) => ({todos: state.todos});

const mapDispatchToProps = (dispatch) => {
    return{
        delete: todo => dispatch(deleteTodoAction(todo))
    };
}

const todoDetails = document.createElement('div');

todoDetails.classList.add('todoDetails');

const todoTitle = document.createElement('h4');
const todoTitleValue = document.createElement('p');
const todoDescription = document.createElement('h4');
const todoDescriptionValue = document.createElement('p');
const todoDueDate = document.createElement('h4');
const todoDueDateValue = document.createElement('p');
const todoDueTime = document.createElement('h4');
const todoDueTimeValue = document.createElement('p');
// const todoCreatedTime= document.createElement('h4');
// const todoCreatedTimeValue = document.createElement('p');
// const todoLastModifiedTime = document.createElement('h4');
// const todoLastModifiedTimeValue = document.createElement('p');
const todoStatus = document.createElement('h4');
const todoStatusValue = document.createElement('p');

class TodoItemComponent extends React.Component{
    
    // shows todo details
    showTodoDetails(){
        const itemsDetails = document.getElementById('itemsDetails');
        const index = this.props.index;
        const todo = this.props.todos[index];
        console.log(todo);
        todoTitle.innerHTML = "TITLE:";
        todoDescription.innerHTML = "DESCRIPTION:";
        todoDueDate.innerHTML = "DUE DATE:";
        todoDueTime.innerHTML = "DUE TIME:"
        // todoCreatedTime.innerHTML = "CREATED TIME:"
        // todoLastModifiedTime.innerHTML = "LAST MODIFIED TIME:"
        todoStatus.innerHTML = "STATUS:"

        todoTitleValue.innerHTML = todo.title;
        todoDescriptionValue.innerHTML = todo.description; 
        todoDueDateValue.innerHTML = todo.dueDate;
        todoDueTimeValue.innerHTML = todo.dueTime; 
        // todoCreatedTimeValue.innerHTML = todo.createdDate;
        // todoLastModifiedTimeValue.innerHTML = todo.lastModifiedDate;
        todoStatusValue.innerHTML = todo.status;

        todoDetails.appendChild(todoTitle);
        todoDetails.appendChild(todoTitleValue);
        todoDetails.appendChild(todoDescription);
        todoDetails.appendChild(todoDescriptionValue);
        todoDetails.appendChild(todoDueDate);
        todoDetails.appendChild(todoDueDateValue);
        todoDetails.appendChild(todoDueTime);
        todoDetails.appendChild(todoDueTimeValue);
        // todoDetails.appendChild(todoCreatedTime);
        // todoDetails.appendChild(todoCreatedTimeValue);
        // todoDetails.appendChild(todoLastModifiedTime);
        // todoDetails.appendChild(todoLastModifiedTimeValue);
        todoDetails.appendChild(todoStatus);
        todoDetails.appendChild(todoStatusValue);

        itemsDetails.appendChild(todoDetails);
    }

    // marks todo as done 
    setStatus(){
        const index = this.props.index;
        const todo = this.props.todos[index];
        console.log(todo);
        updateTodo({"status": "close"}, todo._id);
        const btnAdd = document.getElementById(this.props.index);
        const item = document.getElementById(this.props.index);
        item.classList.toggle("checked");
        btnAdd.classList.toggle("btnDone");
        Component.location.reload(false);
        this.showTodoDetails();
    }

    render(){
        // returns html consisting of list of todo items
        return (
            <li class="todo" id={this.props.index} onClick={this.showTodoDetails.bind(this)}>
                {this.props.todo}
                <button onClick={this.setStatus.bind(this)} className="btn" id={this.props.index}><i class='fas fa-check'></i></button>
            </li>
        );
    }
}

// connects component to redux store
const TodoItem = connect(mapStoreToProps, mapDispatchToProps)(TodoItemComponent)

export default TodoItem;