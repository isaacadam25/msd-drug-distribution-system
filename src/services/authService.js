import http from '../services/httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/login";

export const login = (username, password) => {
    return http.post(apiEndPoint, { username: username, password: password });
};

