var express = require('express')
var app = express()
var port = 1209;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userModel = require('./Models/user.js')
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://AdvanceUser:AdvanceUser@cluster0.uyr6l.mongodb.net/AdvanceDB?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Data base have been connected")
})


const dummyUsers = [
  {
    username: "john_doe",
    name: "John Doe",
    password: "pass1234",
    age: "28",
    isMarried: false,
    email: "john.doe@example.com"
  },
  {
    username: "jane_smith",
    name: "Jane Smith",
    password: "jane@2024",
    age: "32",
    isMarried: true,
    email: "jane.smith@example.com"
  },
  {
    username: "alex_ray",
    name: "Alex Ray",
    password: "alexpass",
    age: "22",
    isMarried: false,
    email: "alex.ray@example.com"
  },
  {
    username: "sara_connor",
    name: "Sara Connor",
    password: "sara123",
    age: "29",
    isMarried: true,
    email: "sara.connor@example.com"
  },
  {
    username: "mike_jordan",
    name: "Mike Jordan",
    password: "mjpass2023",
    age: "35",
    isMarried: true,
    email: "mike.jordan@example.com"
  },
  {
    username: "linda_west",
    name: "Linda West",
    password: "lindawest",
    age: "27",
    isMarried: false,
    email: "linda.west@example.com"
  },
  {
    username: "peter_parker",
    name: "Peter Parker",
    password: "spidey123",
    age: "24",
    isMarried: false,
    email: "peter.parker@example.com"
  },
  {
    username: "clark_kent",
    name: "Clark Kent",
    password: "superman",
    age: "30",
    isMarried: true,
    email: "clark.kent@example.com"
  },
  {
    username: "bruce_wayne",
    name: "Bruce Wayne",
    password: "batman@123",
    age: "36",
    isMarried: false,
    email: "bruce.wayne@example.com"
  },
  {
    username: "tony_stark",
    name: "Tony Stark",
    password: "ironman",
    age: "40",
    isMarried: true,
    email: "tony.stark@example.com"
  },
  {
    username: "natasha_romanoff",
    name: "Natasha Romanoff",
    password: "blackwidow",
    age: "34",
    isMarried: false,
    email: "natasha.romanoff@example.com"
  },
  {
    username: "steve_rogers",
    name: "Steve Rogers",
    password: "capamerica",
    age: "38",
    isMarried: false,
    email: "steve.rogers@example.com"
  },
  {
    username: "wanda_maximoff",
    name: "Wanda Maximoff",
    password: "scarletwitch",
    age: "26",
    isMarried: true,
    email: "wanda.maximoff@example.com"
  },
  {
    username: "bucky_barnes",
    name: "Bucky Barnes",
    password: "wintersoldier",
    age: "33",
    isMarried: false,
    email: "bucky.barnes@example.com"
  },
  {
    username: "bruce_banner",
    name: "Bruce Banner",
    password: "hulkstrong",
    age: "39",
    isMarried: true,
    email: "bruce.banner@example.com"
  }
];

module.exports = dummyUsers;




app.get('/', function (req, res) {
    res.send("heey! Man")
})

app.get('/createmany', async function (req, res) {
 let data = await userModel.insertMany(dummyUsers)
 res.send(data)
})

app.get('/users', async function (req, res) {
//  let data = await userModel.find({ age: {$ne:28}})    {ne} means returing all value which is not equal to this value;
//  let data = await userModel.find({ age: {$lt:28}})    {lt} means returing all value which is less than to this value;
//  let data = await userModel.find({ age: {$gt:28}})    {gt} means returing all value which is less greater to this value;
//  let data = await userModel.find({ age: {$lte:28}})    {lte} means returing all value which is less than and equal  to this value;
//  let data = await userModel.find({ age: {$gte:28}})    {gte} means returing all value which is less greater and equal to this value;
//  let data = await userModel.find({ age: {$in:[28, 30, 35]}})    {in} means returing all value which is present  to this json data;
//  let data = await userModel.find({ age: {$nin:[28, 30, 35]}})    {nin} means returing all value which is not present to this json data;
//  let data = await userModel.find({ isAdmin: {$exists:false}})    {exist} means returing all field which is present to this json data;

//  let data = await userModel.find({$and:[{isMarried:true}, {age:{$gte:18}}]})    {and} means returing all value which is less greater and equal  to this value and isMarried is true;


 res.send(data)
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})