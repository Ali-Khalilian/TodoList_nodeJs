const Todo = require('../model/todo');

exports.getIndex = (req, res) => {
    Todo.countDocuments({ completed: true }).then(completedTodos => {
        Todo.find().then(todos => {
            res.render('index', {
                pageTitle: 'کارهای روزمره',
                todos,
                completedTodos,
                remainingTodos: todos.length - completedTodos
            });
        });
    });
};