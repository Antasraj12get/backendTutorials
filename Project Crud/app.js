const express = require('express');
const path = require("path")
const fs = require("fs");
const app = express();
let port = 2500;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    fs.readdir(`./files`, function (err, files) {
        // console.log(files);
        res.render("index", { files });
    })
})

app.get("/edit/:filename", (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        if (err) return res.send(err);
        res.render("edit", { data, filename: req.params.filename });
    })
})


app.get("/delete/:filename", (req, res) => {
    fs.unlink(`./files/${req.params.filename}`, function (err) {
        if (err) return res.send(err);
        res.redirect("/")
    })
})

app.post("/update/:filename", (req, res) => {
    fs.writeFile(`./files/${req.params.filename}`, req.body.fileData,  function (err) {
        if (err) return res.send(err);
        res.redirect("/")
    })
})




// app.get("/create", (req, res) => {
//     const today = new Date();

//     const day = String(today.getDate()).padStart(2, '0');
//     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const year = today.getFullYear();
//     const fn = `${day}-${month}-${year}.txt`;
//     fs.writeFile(`./files/${fn}`, "successfullay fetched", function (err) {
//         if (err) return res.send("something went wrong");
//         else res.send("done")
//     })
// })

app.listen(port, () => {
    console.log(`server is running on : ${port}`)
});