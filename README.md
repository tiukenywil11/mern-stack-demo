# MERN stack demo

## How to run 
1. Deploy MongoDB database. Check 'database' directory for instructions on how to deploy db.
  
2. Run the following on root directory.
```code
npm install
npm run dev
```

## URLs documented based on tutorial
### Part 1: ExpressJS Goal APIs, and MongoDB instance

Database:  
Check 'database' directory for instructions on how to deploy db.  
  
Following databases were created:
- mongodb://root:example@localhost:27017
- mongodb://admin:password@localhost:27017/mernapp

Goal APIs:
- [GET] http://localhost:5000/goals
- [POST] http://localhost:5000/goals
- [PUT] http://localhost:5000/goals/:id
- [DELETE] http://localhost:5000/goals/:id

### Part 2: ExpressJS User APIs, and JWT authentication for routes
Updated routes to require Bearer token to be used.  
  
User APIs:
- [POST] http://localhost:5000/users : Registers the user to MongoDB.
- [POST] http://localhost:5000/users/login : Logs in the user, and generates a bearer token for authentication.
- [GET] http://localhost:5000/users/me : Returns details about the user logged in.

### Part 3: ReactJS front end, and Redux store, slice, and reducers
Added the following frontend ReactJS pages.

- http://localhost:3000 : Dashboard
- http://localhost:3000/register : Navigates to the register form
- http://localhost:3000/login : Navigates to the login form

### Part 4: ReactJS functions for goals CRUD
Fixed the following URL functionality

- http://localhost:3000 : Added goal form, and restricted access if user is not logged in