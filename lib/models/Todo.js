const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String
})

const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
module.exports = Todo