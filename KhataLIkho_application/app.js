var express = require('express')
var app = express()
var port = 2600;


app.set("view", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', function (req, res) {
res.render("index");
})

 app.listen(port,()=>{
 console.log(`server is running on ${port}`)
 })
