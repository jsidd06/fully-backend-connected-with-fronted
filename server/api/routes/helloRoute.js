import express from 'express'
import { messagesController } from '../controllers/helloController.js'

// creating router
const helloRoute = express.Router()

helloRoute.get('/messages', messagesController)

export default helloRoute
