import express from 'express';
import * as todosController from './../controllers/todo-controller.js';
const router = express.Router();

// POST and GET method calls
router.route('/todos')
    .post(todosController.post)
    .get(todosController.index);

// GET, PATCH, and DELETE method calls
router.route('/todos/:id')
    .get(todosController.get)
    .patch(todosController.update)
    .delete(todosController.remove);

export default router;