import axios from "axios";
import { BASE_URL } from "../config";
import { getToken } from "../utils/utils";

const API = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${getToken()}`,
  },
});

API.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const url = `/api/v1/categories/`;

const getCategories = async () => {
  try {
    const res = await API.get(`${url}`);
    return res;
  } catch (error) {
    return error;
  }
};

const createCategory = async (data) => {
  try {
    const res = await API.post(`${url}`, data);
    return res;
  } catch (error) {
    return error;
  }
};

const getCategory = async (categoryId) => {
  try {
    const res = await API.get(`${url}${categoryId}`);
    return res;
  } catch (error) {
    return error;
  }
};

const updateCategory = async (categoryId, data) => {
  try {
    const res = await API.patch(`${url}${categoryId}`, data);
    return res;
  } catch (error) {
    return error;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const res = await API.delete(`${url}${categoryId}`);
    return res;
  } catch (error) {
    return error;
  }
};

const getCategoryId = async (categoryName) => {
  try {
    const res = await API.get(`${url}getCategoryId/${categoryName}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const category = {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoryId,
};
