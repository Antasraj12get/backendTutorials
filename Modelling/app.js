var express = require('express')
var app = express()
var port = 1210;



app.get('/', function (req, res) {
})

 app.listen(port,()=>{
 console.log(`server is running on ${port}`)
 })
