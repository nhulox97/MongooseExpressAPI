import todos from "../models/todos";

function getAllTodos(req, res) {
    todos.find((err, todos) => {
        if (!todos)
            return res.status(404).send({
                message: 'Not found results',
                status_code: 404,
                todos
            });
        if (err)
            return res.status(500).send({
                message: err,
                status_code: 500
            });
        return res.status(200).send({
            message: 'Get all todos',
            status_code: 200,
            todos
        });
    });
}

function getTodos(req, res) {
    let todosId = req.params.todosId;
    if (!todosId)
        return res.status(400).send({
            message: 'Bad request: you must send an id',
            status_code: 400,
        });
    todos.findById(todosId, (err, todos) => {
        if (!todos)
            return res.status(404).send({
                message: 'Not found results',
                status_code: 404,
                todos
            });
        if (err)
            return res.status(500).send({
                message: err,
                status_code: 500
            });
        return res.status(200).send({
            message: 'Get todos',
            status_code: 200,
            todos
        });
    });
}

function deleteTodos(req, res) {
    let todosId = req.params.todosId;
    if (!todosId)
        return res.status(400).send({
            message: 'Bad request: you must send an id',
            status_code: 400,
        });
    todos.findByIdAndDelete(todosId, (err, todos) => {
        if (err)
            return res.status(500).send({
                message: err,
                status_code: 500
            });
        return res.status(200).send({
            message: 'Successfully deleted',
            status_code: 200,
            todos
        });
    })
}

function updateTodos(req, res) {
    let todosId = req.params.todosId;
    if (!todosId)
        return res.status(400).send({
            message: 'Bad request: you must send an id',
            status_code: 400,
        });

    let ntodo = req.body;
    todos.findByIdAndUpdate(todosId, ntodo, { new: true }, (err, todos) => {
        if (err)
            return res.status(500).send({
                message: err,
                status_code: 500
            });
        return res.status(200).send({
            message: 'Successfully updated',
            status_code: 200,
            todos
        });
    });
}

function newTodos(req, res) {
    let ntodo = req.body;
    todos.create(ntodo, (err, todos) => {
        if (err)
            return res.status(500).send({
                message: err,
                status_code: 500
            });
        return res.status(200).send({
            message: 'Successfully created',
            status_code: 200,
            todos
        });
    });
}

export default {
    getAllTodos,
    getTodos,
    deleteTodos,
    updateTodos,
    newTodos
}