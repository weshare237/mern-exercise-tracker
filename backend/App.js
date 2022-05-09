require('dotenv').config()
const connectDB = require('./database/connection')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000 || process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

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
