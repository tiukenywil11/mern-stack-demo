// authMiddleware.js is used for functions that execute during the request/response cycle

// initialize jsonwebtoken for jwt authentication
const jwt = require('jsonwebtoken');
// adding asyncHandler to handle async related errors
// wrap async functions with this library
const asyncHandler = require('express-async-handler');
// import user model, has mongoose modules for users
const User = require('../models/userModel');

// create a function to protect apis
const protect = asyncHandler(
    async(req, res, next) => {
        // initializ a variable called token
        let token;

        // check the https headers, for the authorization object
        // checks if the authorization header starts with 'Bearer'
        if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')){

            try {
                // get the token from header
                // use split to turn the header into an array
                // index zero of the array should be 'Bearer'
                // index one of the array should provide the token
                token = req.headers.authorization.split(' ')[1];

                // verify if the token is correct by using jwt verify, with the parameters token, and environmental variable JWT_SECRET
                const decoded = jwt.verify(token, process.env.JWT_SECRET)

                // get user from the token
                // req.user variable is made so that we can get user on protected routes
                // decoded.id is used, because the jwt token we made is signed by id
                // chain select ('-password') to exclude the password hash
                req.user = await User.findById(decoded.id).select('-password');

                // used to call the next middleware
                next();

            } catch (error) {

                // retur an error message if the above failed
                console.log(error);
                res.status(401);
                throw new Error('Not authorized');
            }
        }
        
        // if the token does not exist at all, return an error message
        if(!token) {

            res.status(401);
            throw new Error('Not authorized, no token');

        }
        
    }
)

// export functions to be consumed
module.exports = {
    protect,
};