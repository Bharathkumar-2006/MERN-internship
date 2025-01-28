const express = require('express');
const path = require('path');
const mdb=require('mongoose');
const dotenv=require('dotenv');
const app = express();
dotenv.config();
const Signup = require("./models/signupSchema");

app.use(express.json());
mdb.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connection Successful");
})
.catch((err)=>{
console.log("MongoDb connection unsuccessful",err);
});


app.get('/', (req, res) => {
    res.send("Welcome to Backend friends")
})

app.get('/static',(req,res) => {
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/signup", (req, res) => {
  var { firstName, lastName, userName, email, password } = req.body;
  try {
console.log("Inside try");
      const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    });
    console.log(newCustomer);
    newCustomer.save();
    res.status(201).send("signup successfull");
  } catch (err) {
    res.status(400).send("Signup Unsuccessfull",err);
  }
});

app.get('/getsignupdet',async(req,res)=>{
  var signUpdet = await Signup.find()
  res.status(200).json(signUpdet);
})

app.listen(3001, () => {
    console.log("server connected")
})