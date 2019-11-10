import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { addUser, getUsers } from './DataService';

const USER_SERVICE_URL = 'https://reqres.in/api/users';

describe('getUsers', () => {
    let mock, mockResponse;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        mockResponse = {
            "data": [
                {
                    "id": 1
                }
            ]
        };
    });

    it('should make a get request', async () => {

        // Arrange
        mock.onGet(USER_SERVICE_URL).reply(200, mockResponse);
        let spy = jest.spyOn(axios, "get");

        // Act
        await getUsers();

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    it('should make a request to correct url', async () => {

        // Arrange
        mock.onGet(USER_SERVICE_URL).reply(200, mockResponse);
        let spy = jest.spyOn(axios, "get");

        // Act
        await getUsers();

        // Assert
        expect(spy).toHaveBeenCalledWith(USER_SERVICE_URL);
    });

    it('should return users', async () => {

        // Arrange
        mock.onGet(USER_SERVICE_URL).reply(200, mockResponse);

        // Act
        const result = await getUsers();

        // Assert
        expect(result.data).toStrictEqual(mockResponse);
    });

    it('should return null if error', async () => {

        // Arrange
        mock.onGet(USER_SERVICE_URL).reply(500, mockResponse);

        // Act
        const result = await getUsers();

        // Assert
        expect(result).toBe(null);
    });
});

describe('addUser', () => {

    let mock, mockUser, mockResponse;

    beforeEach(() => {
        mock = new MockAdapter(axios);

        mockUser = {
            "name": "Some Name",
            "job": "Some Job"
        };

        mockResponse = {
            "name": "Some Name",
            "job": "Some Job",
            "id": "123",
            "createdAt": "2019-11-10T12:19:22.859Z"
        };
    });

    it('should make a post request', async () => {

        // Arrange
        mock.onPost(USER_SERVICE_URL).reply(200, mockResponse);
        let spy = jest.spyOn(axios, "post");

        // Act
        await addUser(mockUser);

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    it('should make a request to correct url with correct parameters', async () => {

        // Arrange
        mock.onPost(USER_SERVICE_URL).reply(200, mockResponse);
        let spy = jest.spyOn(axios, "post");

        // Act
        await addUser(mockUser);

        // Assert
        expect(spy).toHaveBeenCalledWith(USER_SERVICE_URL, mockUser);
    });

    it('should return user', async () => {

        // Arrange
        mock.onPost(USER_SERVICE_URL).reply(200, mockResponse);

        // Act
        const result = await addUser(mockUser);

        // Assert
        expect(result.data).toStrictEqual(mockResponse);
    });

    it('should return null if error', async () => {

        // Arrange
        mock.onPost(USER_SERVICE_URL).reply(500, mockResponse);

        // Act
        const result = await addUser(mockUser);

        // Assert
        expect(result).toBe(null);
    });
});