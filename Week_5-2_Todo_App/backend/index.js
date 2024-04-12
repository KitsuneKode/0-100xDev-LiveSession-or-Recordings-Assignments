const express = require('express')
const bodyParser = require("body-parser")
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require("cors")

const app = express()
const port = 3000;

app.use(express.json())
app.use(cors());
// app.use(bodyParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
//put in the db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async(req, res) => {

    const todos = await todo.find({});

    res.json({
        todos: todos
    })
})


app.put('/completed', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })


})

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})