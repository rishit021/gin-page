const mongoose = require('mongoose');
require('dotenv').config({path:"./config/cofig.env"})

DB_URI = "mongodb+srv://rishit021:rishit%40%23@iogin-sign.vaxsha1.mongodb.net/?retryWrites=true&w=majority"


const connectDB = () =>{
  mongoose.connect(DB_URI)
  .then(()=>console.log('connected'))
  .catch(err=>console.log(err));
  console.log(process.env.DB_URI);
}

module.exports = connectDB;