const express = require("express");
const cors = require("cors");
const {db} = require("./DB/db")
const { readdirSync } = require('fs');

require("dotenv").config();

const app = express();

const PORT = process.env.PORT

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api' , require('./routes/' + route)));


const server = () =>{
    db();
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    });
}

server();