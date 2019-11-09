import axios from 'axios';

const GET_USER_SERVICE_URL = 'https://reqres.in/api/users';
const ADD_USER_SERVICE_URL = 'https://reqres.in/api/users';

export const getUsers = async () => {
    try {
        const result = await axios(GET_USER_SERVICE_URL);
        return result;
    } catch (e) {
        console.log(e);
        return null;
    }
};

export const addUser = async (user) => {
    try {
        const result = await axios.post(ADD_USER_SERVICE_URL, user);
        return result;
    } catch (e) {
        console.log(e);
        return null;
    }
};