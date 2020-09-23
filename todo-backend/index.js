const db = require("./models/")

const express = require("express") 
const app = express() 

const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000 

const todoRoute = require("./routes/todoRoutes");

const cors = require("cors")
app.use(cors())

app.use(bodyParser.json()) 

app.use("", todoRoute)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`) 
})