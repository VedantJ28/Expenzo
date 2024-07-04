const mongoose = require('mongoose');

require("dotenv").config();

const db = async () =>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connection Successfull");
    } catch(error){
        console.log("Database connection failed" + error);
    }
} 

module.exports = {db};