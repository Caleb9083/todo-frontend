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

const createTodo = async (data) => {
  try {
    const res = await API.post(`/todos`, data);
    return res;
  } catch (error) {
    return error;
  }
};

const getTodo = async (todoId) => {
  try {
    const res = await API.get(`/todos/${todoId}`);
    return res;
  } catch (error) {
    return error;
  }
};

const updateTodo = async (todoId) => {
  try {
    const res = await API.patch(`/todos/${todoId}`);
    return res;
  } catch (error) {
    return error;
  }
};

const deleteTodo = async (todoId) => {
  try {
    const res = await API.delete(`/todos/${todoId}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const todos = {
  getTodosByCategory,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
