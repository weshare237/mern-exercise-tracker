require('dotenv').config()
const connectDB = require('./database/connection')
const express = require('express')
const app = express()
const cors = require('cors')
const users = require('./routes/users')
const exercises = require('./routes/exercises')
const port = 5000 || process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/users', users)
app.use('/exercises', exercises)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
