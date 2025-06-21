const express = require('express')
const app = express()
const port = 5556;
const expressSession = require("express-session");
const flash = require("connect-flash")

app.use(expressSession({
    secret:"yoyo",
    resave:false,
    saveUninitialized:false,
}))

app.use(flash());
app.use(function(req, res, next){
    console.log("First middleware is working");
    next(); 
})

app.get('/', (req, res, next) => {
    req.flash("error", "Invalid Cridentials")
    res.redirect("/error")
})

app.get('/error', (req, res, next) => {
    let message = req.flash("error")
    res.send(message);
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
