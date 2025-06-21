var express = require('express')
var app = express()
var port = 5577;



app.get('/', function (req, res) {
    res.send("it is a home page's")
})


app.get('/about', function (req, res) {
    res.send("It is a Home Student About's")
})

app.get('/about/:user', function (req, res) {
    res.send(`It is a about's ${req.params.user} Student`)
})


app.get('/about/:user/:index', function (req, res) {
    res.send(`It is a about's ${req.params.user} Student with their index: ${req.params.index} `)
})

 app.listen(port,()=>{
 console.log(`server is running on ${port}`)
 })
