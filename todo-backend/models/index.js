const mongoose = require("mongoose")

//MongoDB Atlas

// const DB = "mongodb+srv://laiba:laiba69@cluster0-g0ej2.mongodb.net/tododb?retryWrites=true&w=majority";

// mongoose.connect(DB, {
// useNewUrlParser: true,
// useCreateIndex: true,
// useUnifiedTopology:true,
// useFindAndModify: false
// }).then(() => console.log("Database connection successful!"))


//MongoDB Local 
const db = "mongodb://127.0.0.1:27017/react-todo"
mongoose.connect(db, {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindAndModify: false
}).then(console.log("Connected to Local MongoDB"))
// mongoose.set("debug", true) 
// mongoose.Promise = Promise 

module.exports.Todo = require("./todo") 