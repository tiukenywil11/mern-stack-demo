// userConttoller.js is where the functions to trigger upon api call are placed

// initialize jsonwebtoken for jwt authentication
const jwt = require('jsonwebtoken');
// initialize brcyptjs to hash credentials
const bcrypt = require('bcryptjs');
// adding asyncHandler to handle async related errors
// wrap async functions with this library
const asyncHandler = require('express-async-handler');
// import user model, has mongoose modules for users
const User = require('../models/userModel');

// @desc Register user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(
    async (req, res) => {
        // desructure the keys from req.body to get data from body
        const { name, email, password } = req.body

        // validate if the fields are existing
        if(!name || !email || !password) {
            res.status(400);
            throw new Error('Please add all fields');
        }

        // gets variable that returns true or false of the email exists
        const userExists = await User.findOne({ email})

        // validates if user is already existing
        if(!userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        res.json({ message: 'Register User' })
    }
)

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(
    async (req, res) => {
        res.json({ message: 'Login User' })
    }
)

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(
    async (req, res) => {
        res.json({ message: 'User data display' })
    }
)

// export functions to be consumed
module.exports = {
    registerUser,
    loginUser,
    getMe
}
