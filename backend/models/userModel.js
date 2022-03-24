// userModel.js is used to define the schema and field for this resource

// initialize mongoose to be able to call mongodb database
const mongoose = require('mongoose');

// initialize user object schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)