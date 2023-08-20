const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
    },
    fullname: {
        type: String,
        required: [true, 'Please enter a fullname'],
    },
},  { timestamps: true });


const User = mongoose.model('user', userSchema);

module.exports = User;