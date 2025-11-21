import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/register`, reqBody);
};

export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/login`, reqBody);
};

export const addProductAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/add`, reqBody);
};

export const getproductAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/all`);
};

export const deleteProductAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/delete/${id}`);
};