const mongoose = require('mongoose');
require('dotenv').config();

<<<<<<< HEAD
DB = 'mongodb+srv://rishit021:rishit%40%23@iogin-sign.vaxsha1.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () =>{
  mongoose.connect(DB)
  .then(()=>console.log('connected'))
  .catch(err=>console.log(err));
=======
const connectDB = () =>{
  mongoose.connect(process.env.DB_CONNECT).then(()=>console.log('connected')).catch(err=>console.log(err));
>>>>>>> origin
}

module.exports = connectDB;