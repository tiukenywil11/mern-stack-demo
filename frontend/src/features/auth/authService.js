// create authService.js to handle all the http requests

// import axios for http requests
import axios from 'axios';

// initialize API URL with base path
const API_URL = '/api/users/'

// function to register server via http call
const register = async (userData) => {

    // create variable to keep the response from http request
    const response = await axios.post(API_URL, userData)

    // checks if response is not empty
    if(response.data) {
        // set local storage with item called user, and change it to string format
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    // return data from http request
    return response.data;

}

// function to login server via http call
const login = async (userData) => {

    // create variable to keep the response from http request
    const response = await axios.post(API_URL + 'login', userData)

    // checks if response is not empty
    if(response.data) {
        // set local storage with item called user, and change it to string format
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    // return data from http request
    return response.data;

}

// function to logout user
const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout,
    login
}

// export authService class
export default authService;