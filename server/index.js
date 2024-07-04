const express = require("express");
const cors = require("cors");
const {db} = require("./DB/db");

const transactionsRouter = require('./routes/transactions');
const usersRouter = require('./routes/users');
const authRouter = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/transactions', transactionsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

//server
const server = () =>{
    db();
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    });
}

server();