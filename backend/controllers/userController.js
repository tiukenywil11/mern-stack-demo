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
        const userExists = await User.findOne({ email })

        // validates if user is already existing
        if(userExists) {
            res.status(400)
            throw new Error('User already exists');
        }

        // generate salt to help has password by using bcrypt method genSalt, passing ten as the default parameter
        const salt = await bcrypt.genSalt(10);
        // generate a hashed password by using bcrypt method hash, and passing the original password, and the salt
        const hashedPassword = await bcrypt.hash(password, salt)

        // create a user, passing value hashedPassword for the password key
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // checks if user is exists, and is generated
        // id is automatically generated for the user
        if(user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
)

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(
    async (req, res) => {

        // desructure the keys from req.body to get data for login validation
        const { email, password } = req.body;

        // check for user email
        const user = await User.findOne({ email })

        // validates login credentials, if they're correct
        // bcrypt compare, compared the current password, and the hashed password
        if(user && (await bcrypt.compare(password, user.password))) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error('Invalid credentials')
        }
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

// create a function that generates JWT, that expired in 30 days
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// export functions to be consumed
module.exports = {
    registerUser,
    loginUser,
    getMe
}
