import http from '../services/httpService';
import {apiUrl, msdApi} from '../config.json';

const getApprovedMedicineEndPoint = apiUrl + "/stock/batches/approved";
const availableMedicineEndPoint = msdApi + "/stock/medicine/available/quantity";
const expiredMedicineEndPoint = msdApi + "/stock/medicine/expired";
const distributedMedicineEndPoint = msdApi + "/stock/medicine/distributed/quantity";


export const getApprovedMedicine = (token) => {
    return http.get(getApprovedMedicineEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    });
};

export const getAvailableMedicine = (token) => {
    return http.get(availableMedicineEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    });
};

export const getValidMedicineCount = (token) => {
  return http.get(availableMedicineEndPoint, {
      headers: {
          Authorization: `token ${token}`
      }
  });
};

export const getExpiredMedicineCount = (token) => {
   return http.get(expiredMedicineEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    });
};

export const getDistributedMedicineCount = (token) => {
  return http.get(distributedMedicineEndPoint, {
      headers: {
          Authorization: `token ${token}`
      }
  });
};