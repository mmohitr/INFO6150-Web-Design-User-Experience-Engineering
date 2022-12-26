// initialize variables
const todoItems = document.getElementById('todoItems');
const itemsDetails = document.getElementById('itemsDetails');
const btnAdd = document.getElementById('btnAdd');
const btnCreateTodo = document.getElementById('btnCreateTodo');
const form = document.getElementById('form');
form.style.display = 'none';

// array to store newly added todos
const addedTodos = [];

// function to load todos from JSON on page load
const load = (event) => {
    const todoItemsList = xhr.response;
    const target = event.target;
    if(target.status === 200){
        todoItemsList.forEach(todoItem => {
            addItem(todoItem);
        });
    }
}

// function to add todo items from JSON to page 
const addItem = (todoItem) => {
    const todo = document.createElement('a');
    todo.classList.add('todo');
    todo.textContent = todoItem.title;

    todoItems.appendChild(todo);

    const btnDone = document.createElement('button');
    btnDone.classList.add('btn');
    btnDone.innerHTML = "<i class='fas fa-check'></i>";
    btnDone.addEventListener("click", () => {
        todo.classList.toggle("checked");
        btnDone.classList.toggle("btnDone");
    });
    todo.appendChild(btnDone);
}

const xhr = new XMLHttpRequest();

// creates XHR
xhr.open('GET', 'data/todo-items.json');

// sets XHR response type to JSON to be able to extract todos from it 
xhr.responseType = 'json';

// event listener for page load
xhr.addEventListener('load', load);

// sends XHR
xhr.send();

// function to display todo details on page 
const listener = (event) => {
    itemsDetails.innerHTML = '';
    // adding newly added todos to xhrresponse containing todos from JSON file
    const todos = xhr.response.concat(addedTodos);
    todos.forEach(todo => {
        if(event.target.textContent === todo.title){
            displayTodoDetails(todo);
        }
    });
}

// function to display todo details
const displayTodoDetails = (todo) => {
    const todoDetails = document.createElement('div');
    todoDetails.classList.add('todoDetails');

    const todoTitle = document.createElement('p');
    const todoDescription = document.createElement('p');
    const todoDueDate = document.createElement('p');
    const todoDueTime = document.createElement('p');

    todoTitle.innerHTML = todo.title;
    todoDescription.innerHTML = todo.description; 
    todoDueDate.innerHTML = todo.dueDate;
    todoDueTime.innerHTML = todo.time; 

    todoDetails.appendChild(todoTitle);
    todoDetails.appendChild(todoDescription);
    todoDetails.appendChild(todoDueDate);
    todoDetails.appendChild(todoDueTime);

    itemsDetails.appendChild(todoDetails);    
};


// event listener for click on todos
todoItems.addEventListener('click', listener);

// event listener for click on 'add new todo' button to hide/show form
btnAdd.addEventListener('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

// function to validate form inputs
const validateForm = (title, description, dueDate, time) => {
    const msgs = [];
    if(title === ''){
        msgs.push('Please enter a Title\n');
    }
    if(description === ''){
        msgs.push('Please enter a Description\n');
    }
    if(dueDate === ''){
        msgs.push('Please enter a Due Date\n');
    }
    if(new Date(dueDate).toJSON() <= new Date().toJSON().substring(0,10)){
        msgs.push('Please enter a valid Due Date greater than or equal to today\n');
    }
    if(time === ''){
        msgs.push('Please enter a Time\n');
    }
    if(msgs.length != 0){
        alert(msgs.toString().replaceAll(',', ''));
    }
    else{
        return true;
    }
}

// event listener for click on 'create todo' button
btnCreateTodo.addEventListener('click', () => {
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const time = formData.get('time');

    if(validateForm(title, description, dueDate, time) === true){
        const localTodo = {
            "title": title,
            "description": description,
            "dueDate": dueDate,
            "time": time
        };
        addedTodos.push(localTodo);
        console.log(addedTodos);
        addItem(localTodo);
    
        form.reset();
        form.style.display = 'none';
    }
});