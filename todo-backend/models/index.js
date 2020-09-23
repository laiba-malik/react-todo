const mongoose = require("mongoose")

//MongoDB Atlas

// const DB = "mongodb+srv://laiba:laiba69@cluster0-g0ej2.mongodb.net/tododb?retryWrites=true&w=majority";

// mongoose.connect(DB, {
// useNewUrlParser: true,
// useCreateIndex: true,
// useUnifiedTopology:true,
// useFindAndModify: false
// }).then(() => console.log("Database connection successful!"));


//MongoDB Local 
const db = mongoose.connect("mongodb://localhost:27017/react-todo", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("Local Database Connection Successful"))
.catch(err => console.log(err)) 

module.exports.Todo = require("./todo") 