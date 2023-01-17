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

const getCategory = async (taskId) => {
  try {
    const res = await API.get(`${url}/${taskId}`);
    return res;
  } catch (error) {
    return error;
  }
};

const updateCategory = async (taskId, data) => {
  try {
    const res = await API.patch(`${url}/${taskId}`, data);
    return res;
  } catch (error) {
    return error;
  }
};

const deleteCategory = async (taskId) => {
  try {
    const res = await API.delete(`${url}/${taskId}`);
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
};
