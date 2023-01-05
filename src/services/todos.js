import axios from "axios";
import { BASE_URL } from "../config";

const API = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const url = `/todos/todosByCategory/`;

const getTodosByCategory = async (category) => {
  try {
    const res = await API.get(`${url}${category}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const todos = {
  getTodosByCategory,
};
