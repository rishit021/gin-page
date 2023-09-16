const express = require('express');
const app = express();
//connecting to database
const { connectDB } = require('/home/runner/login-page/backend/database');
//get userdata from fronend
const { userdata } = require('/home/runner/login-page/backend/getuser');

/*create userdata function api for app */

const PORT = 8080;

app.use(express.static("public"));
app.use(express.json());

connectDB();



app.listen(PORT, () => {
  console.log("server started on " + process.env.PORT || PORT);
});

modual.exports.app = app
