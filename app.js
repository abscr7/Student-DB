const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = 80;

//1. Connect
mongoose.connect('mongodb://localhost:27017/studentDB', {useNewUrlParser: true, useUnifiedTopology: true});

//2.Define a schema
const stuSchema = new mongoose.Schema({
    name: String,
    email: String,
    maths: Number,
    physics: Number,
    chemistry: Number,
  });

//3.Compile schema into a model
const student = mongoose.model('student', stuSchema);


app.get("/" ,(req,res)=>{
    res.sendFile(__dirname + "/student.html")
})

app.post("/",(req,res)=>{
    var myData = new student(req.body);
    myData.save().then(()=>{
        res.send("Saved Successfully!!")
    }).catch(()=>{
        res.send("Not Saved!!")
    });
    // res.render('student.html')
})


app.listen(port , ()=>{
    console.log(`The application started successfully on ${port}`)
})