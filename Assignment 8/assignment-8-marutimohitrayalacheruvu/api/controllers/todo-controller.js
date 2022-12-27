import * as todosService from './../services/todos-service.js';

const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// CREATE
export const post = async (request, response) => {
    try{
        const payload = request.body;
        payload.createdDate = Date.now();
        const todo = await todosService.save(payload);
        setSuccessResponse(todo,response);
    }
    catch (error){
        setErrorResponse(error, response);
    }
}

export const index = async (request, response) => {
    try{
        const id = request.query.id;
        const title = request.query.title;
        const query = {};
        if(id){
            query.id = id;
        }
        if(title)
        {
            query.title = title;
        }
        const todos = await todosService.search(query);
        setSuccessResponse(todos, response);
    }
    catch (error)
    {
        setErrorResponse(error, response);
    }
}

// READ
export const get = async (request, response) => {
    try{
        const id = request.params.id;
        const todo = await todosService.get(id);
        setSuccessResponse(todo, response);
    }catch (error)
    {
        setErrorResponse(error,response);
    }
}

// UPDATE
export const update = async (request, response) => {
    try{
        const id = request.params.id;
        const updated={...request.body};
        updated.lastModifiedDate = Date.now();
        const todo = await todosService.update(updated, id);
        setSuccessResponse(todo, response);

    }catch (error)
    {
        setErrorResponse(error,response);
    }
    
}

// DELETE
export const remove = async (request, response) => {
    try{
        const id = request.params.id;
        const todo = await todosService.remove(id);
        setSuccessResponse({message: 'Todo deleted'}, response);
    }catch (error)
    {
        setErrorResponse(error, response);
    }
    
}