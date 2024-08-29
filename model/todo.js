const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
        trime: true,
        minlength: 3,
        maxlength: 255
    },
    completed: {
        type: Boolean,
        require: false,
        default: false
    }
});

const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;