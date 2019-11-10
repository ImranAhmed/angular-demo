import axios from 'axios';

const USER_SERVICE_URL = 'https://reqres.in/api/users';

export const getUsers = async () => {
    try {
        const result = await axios.get(USER_SERVICE_URL);
        return result;
    } catch (e) {
        return null;
    }
};

export const addUser = async (user) => {
    try {
        const result = await axios.post(USER_SERVICE_URL, user);
        return result;
    } catch (e) {
        return null;
    }
};