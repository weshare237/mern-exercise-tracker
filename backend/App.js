require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000 || process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
