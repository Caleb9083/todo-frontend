import axios from "axios";
import { BASE_URL } from "../config";

const API = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

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

export const category = {
  getCategories,
  createCategory,
};
