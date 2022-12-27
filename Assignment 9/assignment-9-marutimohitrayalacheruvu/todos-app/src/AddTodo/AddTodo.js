import './AddTodo.scss'
import React from 'react';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

class AddTodo extends React.Component{
    // method to show form when 'Show/Hide Todo Form' button is clicked
    showForm(){
        const form = document.getElementById('form');
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    }

    // returns html consisting of 'Show/Hide Todo Form' button
    render(){
        return(
            <div>
                <button class="btnAdd" onClick={this.showForm.bind(this)}>Show/Hide Todo Form</button>
            </div>
        )
    }
}

export default AddTodo;