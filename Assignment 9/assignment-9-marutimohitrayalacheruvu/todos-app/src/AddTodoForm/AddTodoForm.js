import './AddTodoForm.scss'
import React from 'react';
import { addTodoAction } from './../Store/Actions/Todo'
import { addTodo } from '../services/todos-service';
import { connect } from 'react-redux';

// specify actions component needs to dispatch
const mapDispatchToProps = (dispatch) => {
    return{
        add: todo => dispatch(addTodoAction(todo))
    };
}

class AddTodoFormComponent extends React.Component{
    // saves newly created todo by taking form data 
    saveTodo(){
        const form = document.getElementById('form');
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const dueDate = formData.get('dueDate');
        const time = formData.get('time');
        const todo = {
            "title": title,
            "description": description,
            "dueDate": dueDate,
            "dueTime": time,
            "status": "open"
        };
        addTodo(todo);
        window.location.reload(false);
        // this.props.add(todo);
        form.style.display = "none";
    }
    
    // returns html consisting of a form to create a new todo
    render(){
        return(
        <div>
            <form id="form">
                <fieldset>
                    <div class="title">
                        <label for="">Title</label>
                        <input type="text" placeholder="Enter title" name="title" id="title" /> 
                    </div>
                    <div class="description">
                        <label for="">Description</label>
                        <input type="textarea" placeholder="Enter description" name="description" id="description" />
                    </div>
                    <div class="due-date">
                        <label for="">Due Date</label>
                        <input type="date" name="dueDate" id="dueDate" />
                    </div>
                    <div class="time">
                        <label for="">Time</label>
                        <input type="time" name="time" id="time" />
                    </div>
                </fieldset>
                <div>
                    <button type="button" id="btnCreateTodo" onClick={this.saveTodo.bind(this)}>Create a new Todo</button>
                </div>
            </form>
        </div>
        )
    }
}

// connects component to redux store
const AddTodoForm = connect(null, mapDispatchToProps)(AddTodoFormComponent)

export default AddTodoForm;