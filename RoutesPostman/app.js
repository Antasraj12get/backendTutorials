var express = require('express')
var app = express()
var port = 1202;

let data = [1,2,3,4,5,6,7,8,9];

app.get('/', function (req, res) {
    res.send("data fetching")
});

app.post("/data/:number", (req, res)=>{
    data.push(parseInt(req.params.number));
    res.send(data);
})

 app.listen(port,()=>{
 console.log(`server is running on ${port}`)
 })
