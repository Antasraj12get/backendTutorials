var express = require('express')
var app = express()
var port = 1208;


const userModel = require("./Models/userModel.js")
const mongoose = require('mongoose')
// mongoose.connect("mongodb+srv://learnUser:learnUser@cluster0.uyr6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb+srv://learnUser:learnUser@cluster0.uyr6l.mongodb.net/myAppDB?retryWrites=true&w=majority&appName=Cluster0")

.then(() => {
    console.log("Data base have been connected")
})


app.get('/', function (req, res) {
    res.send("heey! Man")
})

// Reading 
app.get("/read", async function(req, res, next){
    // for single user
let findUser = await userModel.findOne({Name:"Antas"})
res.send(findUser)

// for multiple user

let findUsers = await userModel.find();
res.send(findUsers)


console.log("reeaded")
})




// Updating

app.get("/update", async (req, res, next)=>{
    let updateUser = await userModel.findOneAndUpdate({Name:"Antas Raj Pathak"}, {Name: "Sijju Pathak"}, {new:true})
    res.send(updateUser)
})



// Deleting

app.get("/delete", async(req, res, next)=>{
    let deleteUser = await userModel.findOneAndDelete({Name: "Sijju Pathak"});
    console.log(deleteUser)

})



app.get("/create", async(req, res, next) => {

   let createdUser = await userModel.create({
        userName: "antaspathak_",
        Name: "Antas Raj Pathak",
        Age: 20,
        Email: "antaspathakraj@gmail.com",
        PassWord: "iamAntasPathak"
    })

    console.log("user Created")
    res.send(createdUser);
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})