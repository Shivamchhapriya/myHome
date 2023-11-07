const Router = require("./router/router.js");
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
var cors = require('cors')
var app = express()
app.use(cors({origin:'*'}))

// use bodyParser for body parsing
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

 mongoose
 .connect(process.env.DB_URL) // connect to database
 .then(() => console.log("DB connection successful!")) // connect to database
 .catch((error) => console.log(error)); // catch error
Router.use(express.json()) // use express.json

app.use(Router) // access all defined routes
app.listen(process.env.PORT,()=>{
    console.log(process.env.DB_URL)
    console.log(`server is running on ${process.env.PORT}`)
})
