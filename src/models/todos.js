import mongoose from "../config/database";

const todosSchema = {
    name: { type: mongoose.SchemaTypes.String, required: true },
    content: { type: mongoose.SchemaTypes.String, required: true }
}

const todos = mongoose.model('todos', todosSchema);

export default todos;