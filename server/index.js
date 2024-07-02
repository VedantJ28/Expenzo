const express = require("express");
const cors = require("cors");
const {db} = require("./DB/db")

require("dotenv").config();

const app = express();

const PORT = process.env.PORT

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send("hello world!");
})

const server = () =>{
    db();
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    });
}

server();