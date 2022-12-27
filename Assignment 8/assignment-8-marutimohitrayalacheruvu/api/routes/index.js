import todosRouter from './todos-router.js';

export default (app) => {
    app.use('/', todosRouter);
}

