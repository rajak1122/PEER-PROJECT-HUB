require('dotenv').config()

const cors = require('cors')
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Peer Project Hub server is running' })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app