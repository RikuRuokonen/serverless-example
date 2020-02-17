const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const helmet = require('helmet')
app.use(helmet())

require('./db')
const routes = require('./routes')
app.get('/api/home', (req, res) => res.json({ message: 'hellou' }));
app.use('/api', routes)

module.exports = app