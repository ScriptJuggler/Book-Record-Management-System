const express = require("express");

//database connection
const DbConnection = require("./databaseConnection");

const dotenv = require("dotenv");



//importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

dotenv.config()
const app = express();
DbConnection()

const port = 8081;

app.use(express.json())

app.get("/",(req,res) => {
    res.status(200).json({
        message: "Server is up and running"
    })
})

app.use("/users",usersRouter);
app.use("/books",booksRouter);


app.get("*",(req,res) => {
    res.status(404).json({
        message: "This route does not exist"
    })
})

app.listen(port,() => {
    console.log(`Server is up n running on port ${port}`)
})