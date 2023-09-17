const { Schema, default: mongoose } = require("mongoose")

let userSchema = new Schema({
    fullName : String,
    Email : String,
    Number : Number,
    userName : String,
    password : String,
});

exports.user = mongoose.model('user',userSchema);
