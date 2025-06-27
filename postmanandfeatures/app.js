var express = require('express')
var app = express()
var port = 6789;



app.get('/data', function (req, res) {
    res.send("it's working")
})

app.post('/data', function (req, res) {
    res.send("it's working")
})

app.put('/data', function (req, res) {
    res.send("it's working")
})

app.delete('/data', function (req, res) {
    res.send("it's working")
})

app.patch('/data', function (req, res) {
    res.send("it's working")
})




 app.listen(port,()=>{
 console.log(`server is running on ${port}`)
 })


//  Error handling
// 1. first is => App crash err : that means i have done some mistake on top level not inside function
// 2. second is => Refrence err : it means i have done some mistake in request response cycle
// How to be safe from errors
// 1. make all middlewares on top of the scope or code
// 2. build all error hander on below of the code because if we need to handle err we can directly send it to bottom