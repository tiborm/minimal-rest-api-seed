import config from './config'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const apiRouter = require('./api')

const app = express()

app.use(logger(config.logs.format))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', apiRouter)

module.exports = app
