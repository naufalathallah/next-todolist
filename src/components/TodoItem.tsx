import React from "react";
import { List, Button, Popconfirm, Switch, Tooltip, Tag } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { updateTodo, deleteTodo } from "../services/todoService";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onUpdate: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onUpdate }) => {
  const handleToggle = async () => {
    await updateTodo(id, { title, completed: !completed });
    onUpdate();
  };

  const handleDelete = async () => {
    await deleteTodo(id);
    onUpdate();
  };

  return (
    <List.Item
      actions={[
        <Tooltip key="toggle" title={completed ? "Mark as incomplete" : "Mark as complete"}>
          <Switch
            checked={completed}
            onChange={handleToggle}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Tooltip>,
        <Popconfirm
          key="delete"
          title="Are you sure you want to delete this todo?"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>,
      ]}
    >
      <List.Item.Meta
        title={title}
        description={<Tag color={completed ? "green" : "volcano"}>{completed ? "Completed" : "Incomplete"}</Tag>}
      />
    </List.Item>
  );
};

export default TodoItem;
