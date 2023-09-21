const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config({path:"./config/cofig.env"})
const connectDB = require('./database');
const router = require('./routs/user');


/*create userdata function api for app */

const PORT = 8080;

app.use(express.static("public"));
app.use(express.json());
app.use('/', router)
// console.log(path.resolve());

connectDB();

app.listen(PORT, () => {
  console.log("server started on " + PORT);
});

module.exports.app = app;
