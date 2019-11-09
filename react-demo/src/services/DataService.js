import axios from 'axios';

const USER_SERVICE_URL = 'https://reqres.in/api/users';

export const getUsers = async () => {
    try {
        const result = await axios(USER_SERVICE_URL);
        return result;
    } catch (e) {
        console.log(e);
        return null;
    }
};