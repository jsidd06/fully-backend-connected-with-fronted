import express from 'express'
import {
  messagesController,
  newMessageController,
} from '../controllers/helloController.js'

// creating router
const helloRoute = express.Router()

helloRoute.get('/messages', messagesController)
helloRoute.get('/message/:new', newMessageController)

export default helloRoute
