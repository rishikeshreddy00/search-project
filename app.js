const path = require("path")
const express = require("express")
const ejs = require("ejs")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
var bodyParser = require('body-parser')

//load env vars 
dotenv.config({path: "./config/config.env"})

// connect DB
connectDB()

const app = express()

app.use(express.static("public/"))
app.use(bodyParser.urlencoded({extended: true}))

//set view-engine
app.set("view engine","ejs")

//routes
app.use("/",require("./routes/users"))
app.use("/find/user",require("./routes/showuser"))
app.use("/add/user",require("./routes/adduser"))


let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port,()=> console.log(`server running in port ${port}`))