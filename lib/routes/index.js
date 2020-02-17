const express = require('express')
const router = express.Router()
const todos = require('./todos/todos.controller.js')

router.use('/todos', todos)

module.exports = router