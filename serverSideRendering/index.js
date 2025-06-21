var express = require('express')
var app = express()
var port = 5678;

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form")
})

// get method
app.get("/data", (req, res) => {
    console.log(req.query)
    res.send("it's good")
})


// post method
app.post("/postdata", (req, res) => {
    res.send("it's also working")
    console.log(req.body)
})











// app.get('/', function (req, res) {
//     res.render("index")
// })
// app.get('/profile', function (req, res) {
//     res.render("profile")
// })

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
