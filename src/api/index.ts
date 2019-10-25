import express from 'express'
import users from './routes/users'

var router = express.Router()

const GET = router.get.bind(router)
const POST = router.post.bind(router)

/* Endpoint definitions */
GET('/users', users.getUsers)

module.exports = router
