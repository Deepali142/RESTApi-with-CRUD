const express = require('express');
const mongoose = require('mongoose');

// setup pur express module
const app = express();
app.use(express.json());

// connect to mongodb
mongoose.connect("mongodb://localhost/ourdata")
.then(()=>{
    console.log("connected database")
}).catch((err)=>{
    console.log(err)
})

// // Adding a router
let routerfile = require("./Router/api")
app.use("/api", routerfile)


// listen for request
const port = 4000
app.listen(port, () => console.log(`Listening on port ${port}..`));
