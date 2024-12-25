"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { getTodos } from "../services/todoService";
import TodoTab from "./TodoTab";
import TodoForm from "./TodoForm";

const { Content } = Layout;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Content>
      <TodoForm onAdd={fetchTodos} />
      <TodoTab todos={todos} fetchTodos={fetchTodos} />
    </Content>
  );
};

export default TodoList;
