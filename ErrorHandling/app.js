var express = require('express')
var app = express()
var port = 1201;


// Error handling in file
app.get('/', function (req, res, next) {
    try{
        res.send(heey )
    }catch(error){
        next(error)
    }
})


// error handler

app.use((err, req, res, next)=>{
res.status(500).send(err.message);
})

 app.listen(port,()=>{
 console.log(`server is running on ${port}`)
 })
