const express = require('express')
const todosController = express.Router()
const Todo = require('../../models/Todo')

const addTodo = async (req, res, next) => {
  try {
  const todo = await Todo.create(req.body)
  res.status(201).send(todo)
  } catch(error) {
    res.send(500).send({error})
  }
}

const getAllTodos = async (req, res, next) => {
  console.log("run get all")
  try {
    const todos = await Todo.find()
    res.status(200).send(todos)
  } catch(error) {
    res.status(500).send({error})
  }
  
}

const getById = async ( req, res, next) => {
  const { body } = req;
  console.log(body)
  console.log(body.todoId)
  try {
    const todo = await Todo.findById(body.todoId)
    res.status(200).send({todo})
  } catch(error) {
    res.status(500).send({error})
  }
  
}

todosController
  .get('/ping', async (req, res, next) => {
  res.status(200).send({"message":  "ping"})
})

todosController.use('/get-all', getAllTodos)
todosController.use('/add', addTodo)
todosController.use('/get-by-id', getById)

module.exports = todosController