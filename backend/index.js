const express = require('express');
const app = express();
//connecting to database
const connectDB = require('./database');
const router = require('./routs/user');

/*create userdata function api for app */

const PORT = 8080;

app.use(express.static("public"));
app.use(express.json());
app.use('/', router)

connectDB();

app.listen(PORT, () => {
  console.log("server started on " + process.env.PORT || PORT);
});

module.exports.app = app
