const mongoose = require('mongoose');
require('dotenv').config();

DB = 'mongodb+srv://rishit021:rishit%40%23@iogin-sign.vaxsha1.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () =>{
  mongoose.connect(DB)
  .then(()=>console.log('connected'))
  .catch(err=>console.log(err));
}

module.exports = connectDB;