const express = require('express')
const app = express()
const port = 3550

app.use(function(req, res, next){
    console.log("First middleware is working");
    next(); // Don't send response here
})

app.use(function(req, res, next){
    console.log("Second middleware is working");
    next(); // Don't send response here
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
