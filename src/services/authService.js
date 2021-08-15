import http from "../services/httpService";
import { apiUrl } from "../config.json";

const loginEndPoint = apiUrl + "/login/";
const getProfileEndPoint = apiUrl + "/userprofile/";
const changePasswordEndPoint = apiUrl + "/change-password/";

export const login = (username, password) => {
  const data = { username: username, password: password };

  return http.post(loginEndPoint, data);
};

export const getProfile = (token) => {
  return http.get(getProfileEndPoint, {
    headers: {
      Authorization: `token ${token}`
    }
  });
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const changePassword = (payload, token) => {
  return http.put(changePasswordEndPoint,payload, {
    headers: {
      Authorization: `token ${token}`
    }
  });
};
