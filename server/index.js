const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./Models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Raviteja:Ravi%40123@crudusers.pbhddgv.mongodb.net/crud");

app.get('/',(req,res)=>{
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001,()=>{
    console.log("server is running");   
})