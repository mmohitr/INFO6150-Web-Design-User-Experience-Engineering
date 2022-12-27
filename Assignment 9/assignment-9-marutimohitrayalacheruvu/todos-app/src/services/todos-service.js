// contains fetch API calls to REST APIs 

// save todo 
export const save = async(todo)=>{
    return fetch('/todos', {method:'POST'});
}

// get todos
export const getTodos = async() => {
    return fetch('http://localhost:5001/todos')
}

// add new todo 
export const addTodo = async(todo) => {
    fetch('http://localhost:5001/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {"Content-type": "application/json"}
    })
}

// update todo
export const updateTodo = async(todo, id) => {
    let url = 'http://localhost:5001/todos/'+id;
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(todo),
        headers: {"Content-type": "application/json"}
    })
}
