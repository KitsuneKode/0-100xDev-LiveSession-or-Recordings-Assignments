const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_DB_URL + "todoApp")
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error));


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports={
    todo
}