import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import helloRoute from './api/routes/helloRoute.js'
import { connectDB } from './configs/database.js'

// connecting database
connectDB()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// creating express App
const app = express()

//port
const PORT = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
}

// routes
app.use('/api/v1/hello', helloRoute)

// root route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the server',
    baseUrl: `${req.protocol + '://' + req.get('host') + req.originalURL}`,
  })
})

// spinning the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
