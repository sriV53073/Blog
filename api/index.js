const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const authRoute = require("./roots/auth");
const userRoute = require("./roots/users");
const postRoute = require("./roots/posts");

app.use(express.json());
mongoose.connect('mongodb+srv://skv3073:Srisai123@sri.xw4oa.mongodb.net/blog?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to Mongo")).catch(err=>console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.listen("6000",() =>{
    console.log("Backend is running.")
})