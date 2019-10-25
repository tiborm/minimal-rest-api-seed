import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const apiRouter = require('./api')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', apiRouter)

module.exports = app
