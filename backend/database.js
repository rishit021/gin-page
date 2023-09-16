const mongoose = require('mongoose');

exports.connectDB = () =>{
  mongoose.connect(process.env.DB_CONNECT).then(()=>console.log('connected')).catch(err=>console.log(err));
}