// import axios for http requests
import axios from 'axios';

// initialize API URL with base path
const API_URL = '/api/goals/'

// function to create goals via http call
const createGoal = async (goalData, token) => {

    // create a config variable, to pass bearer token to the header
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // create variable to keep the response from http request
    // passing goal data, and authorization token
    const response = await axios.post(API_URL, goalData, config)

    // return data from http request
    return response.data;

}

// function to get all goals via http call
const getGoals = async (token) => {

    // create a config variable, to pass bearer token to the header
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // create variable to keep the response from http request
    // passing goal data, and authorization token
    const response = await axios.get(API_URL, config)

    // return data from http request
    return response.data;

}

const goalService = {
    createGoal,
    getGoals,
}

// export goalService class
export default goalService;

