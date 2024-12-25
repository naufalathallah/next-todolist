"use client";

import { Layout } from "antd";
import TodoTab from "./TodoTab";
import TodoForm from "./TodoForm";

const { Content } = Layout;

const TodoList: React.FC = () => {
  return (
    <Content>
      <TodoForm />
      <TodoTab />
    </Content>
  );
};

export default TodoList;
