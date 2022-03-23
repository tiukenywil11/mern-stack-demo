// errorMiddleware.js is used for functions that execute during the request/response cycle

// create a function to handle the errors
const errorHandler = (err, req, res, next) => {
    
    // variable statusCode defaults to 500 if res.statusCode does not return anything
    const statusCode = res.statusCode ? res.statusCode : 500;

    // pass statusCode to response header status
    res.status(statusCode); 

    // pass a json object with message and stack as parameters, to the response json
    // stack returns error logs, only enable if not 'production' environment
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

// export functions to be consumed
module.exports = {
    errorHandler,
};