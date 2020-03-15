import express from 'express';
import todosController from '../controllers/todos';

let router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).send({
        status_code: 200,
        message: 'Welcome to MongooseExpressAPI.'
    })
})

router.route('/todos')
    .get(todosController.getAllTodos)
    .post(todosController.newTodos);


router.route('/todos/:todosId')
    .get(todosController.getTodos)
    .put(todosController.updateTodos)
    .delete(todosController.deleteTodos);

export default router;