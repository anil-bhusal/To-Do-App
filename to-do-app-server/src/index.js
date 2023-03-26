const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')

const connect = require('./database/connect')
connect()

app.use(bodyParser.json())
app.use(cors())


const toDoRoute = require('./routes/toDoRoute');

app.use(toDoRoute)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})