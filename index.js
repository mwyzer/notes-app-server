const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const TodoItemRoute = require("./routes/todoItems");
const app = express();
const PORT = process.env.PORT || 5500;
const dbURL  = "mongodb+srv://wyzer:wyzer1234@cluster0.yeuj8gs.mongodb.net/?retryWrites=true&w=majority/todos?retryWrites=true&w=majority";


app.use(express.static('public'))
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/ping', (req, res) => {
	res.send('pong 🏓')
})

mongoose
    .connect(dbURL)
    .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

app.listen(PORT);


module.exports = app;