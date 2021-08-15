import http from '../services/httpService';
import { apiUrl } from '../config.json';

const getAllHospitalEndPoint = apiUrl + "/hub/destinations/";

export const getAllHospitals = (token) => {
    return http.get(getAllHospitalEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    });
};

export const getIncomingOrders = (refNo, token) => {
  return http.get(`${apiUrl}/hospital/pharmacy/incoming/${refNo}`, {
      headers: {
          Authorization: `token ${token}`
      }
  });
};

export const getInstitutionName = (refNo, token) => {
  return http.get(`${apiUrl}/hub/institute/name/${refNo}`, {
      headers: {
          Authorization: `token ${token}`
      }
  });
};

export const getAvailableDrugs = (refNo, token) => {
    return http.get(`${apiUrl}/report/drugs/remain/quantity/${refNo}`, {
        headers: {
            Authorization: `token ${token}`
        }
    });
};

export const getReceivedDrugs = (refNo, token) => {
  return http.get(`${apiUrl}/report/drugs/received/quantity/${refNo}`, {
      headers: {
          Authorization: `token ${token}`
      }
  })
};