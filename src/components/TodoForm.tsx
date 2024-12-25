"use client";

import React, { useState } from "react";
import { Input, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { createTodo } from "../services/todoService";

interface TodoFormProps {
  onAdd: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async () => {
    if (title.trim()) {
      await createTodo({ title, completed });
      setTitle("");
      setCompleted(false);
      onAdd();
    } else {
      alert("Title is required");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        style={{ marginRight: 8 }}
        required
        onKeyPress={handleKeyPress}
      />
      <Button type="primary" icon={<PlusCircleFilled />} onClick={handleSubmit}>
        Add Todo
      </Button>
    </div>
  );
};

export default TodoForm;
