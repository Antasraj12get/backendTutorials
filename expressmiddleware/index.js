// --------------------------------------- MORGAN ---------------------------------------



var express = require('express')
var morgan = require('morgan');
var app = express()
var port = 5566;

// app.use(morgan("tiny"))
app.use(morgan("combined"))


app.get('/', function (req, res) {
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})






































// ------------------------- COOKIES PARSER -------------------------------------


// var express = require('express')
// var cookieParser = require('cookie-parser');
// var app = express()
// var port = 5566;


// app.use(cookieParser())

// app.get('/', function (req, res, next) {
//     res.send("heey Antas")
// })

// app.get("/banned",function( req, res, next){
// res.cookie("banned", "true");
// res.send("banned")
// })

// app.get("/check", function(req, res, next){
//     console.log(req.cookies.banned);
//     res.send("checking here")
// })

// app.listen(port,()=>{
//     console.log(`server is running on ${port}`)
// })
