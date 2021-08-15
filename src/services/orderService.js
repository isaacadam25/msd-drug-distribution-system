import http from "../services/httpService";
import { msdApi, apiUrl } from "../config.json";

const newOrderEndPoint = msdApi + "/order";
const getAllOrdersEndPoint = apiUrl + "/transactions/all";
const getAllPendingOrdersEndPoint = apiUrl + "/transactions/pending";
const getAllAcceptedOrdersEndPoint = apiUrl + "/transactions/accepted";
const orderItemsEndPoint = msdApi + "/order-items";

export const createOrder = (destination ,token) => {
    const payload = {
        destination: destination
    }
    return http.post(newOrderEndPoint, payload, {
        headers: {
            Authorization: `token ${token}`
        }
    });
};

export const getAllPendingOrders = (token) => {
    return http.get(getAllPendingOrdersEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    })
};

export const getAllOrders = (token) => {
    return http.get(getAllOrdersEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    })
};

export const getAllAcceptedOrders = (token) => {
    return http.get(getAllAcceptedOrdersEndPoint, {
        headers: {
            Authorization: `token ${token}`
        }
    })
};

export const addOrderItems = (payload, token) => {
  return http.post(orderItemsEndPoint, payload,  {
      headers: {
          Authorization: `token ${token}`
      }
  });
};

export const getOrderedItems = (orderId, token) => {
  return http.get(`${msdApi}/order-items/${orderId}/`, {
      headers: {
          Authorization: `token ${token}`
      }
  });
};

export const processOrder = (orderId ,token) => {
  return http.patch(`${msdApi}/order/send/${orderId}`, null, {
      headers: {
          Authorization: `token ${token}`
      }
  });
};
