require('../db').connect()

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String

    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    phone: {
        type: Number,
        require: true,
        // unique
    },
    craeteDate: {
        type: Date,
        require: false,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    //כתובת - אובייקט שמכיל רחוב, עיר ומספר.
    address: {
        street: { type: String },
        city: { type: String },
        houseNumber: { type: Number }
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    lastLog: {
        type: Date,
        default: Date.now
    },
    // token: {
    //     type: String,
    //     select: false
    // }



})



const userModel = mongoose.model('user', userSchema)
module.exports = { userModel }

// module.exports.userModel = userModel 