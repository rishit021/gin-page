const { Schema, default: mongoose } = require("mongoose")

let userSchema = new Schema({
    fullName : {
        type : String,
        required: [true, 'required' ]
    },
    Email : {
        type : String,
        unique: [true, 'Email is already exist'],
        required: [true, 'reqired']
    },
    Number : {
        type : Number,
        unique: [true, 'Username is already exist'],
        required: [true, 'required']

    },
    userName : {
        type : String,
        unique: [true, 'Username is already exist'],
        required: [true, 'required']
    },
    password : String,
});

exports.user = mongoose.model('user',userSchema);
