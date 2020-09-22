const mongoose = require("mongoose")
const DB = "mongodb+srv://laiba:laiba69@cluster0-g0ej2.mongodb.net/tododb?retryWrites=true&w=majority";

mongoose.connect(DB, {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindAndModify: false
}).then(() => console.log("Database connection successful!"));


module.exports.Todo = require("./todo") 