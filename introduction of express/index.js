const express = require('express');
const app = express();
const port = 5555;
const expressSess = require("express-session")

app.use(function(req, res, next){
  console.log(`${req.method} ${req.url} - heey i am a first midd`);
  next();
});

app.use(expressSess({
  secret:"privecy",
  resave: false,
  saveUninitialized:false,
}))


app.get('/create', function(req, res, next){
  req.session.youth = true;
  res.send("session has been done")
})

app.get('/checks', function(req, res, next){
 console.log("session has been done again")
})



app.get('/', function(req, res){
 res.send("hellow Antas raj pathak")
})

app.get('/about', function(req, res){
    res.send("It is about us page ")
})




app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})