import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = async () => {
  const response = await api.get("/");
  return response.data;
};

export const getTodoById = async (id: number) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createTodo = async (todo: { title: string; completed: boolean }) => {
  const response = await api.post("/", todo);
  return response.data;
};

export const updateTodo = async (id: number, todo: { title: string; completed: boolean }) => {
  const response = await api.put(`/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
