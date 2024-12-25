import React from "react";
import { Tabs, Row, Col, List } from "antd";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoTabProps {
  todos: Todo[];
  fetchTodos: () => void;
}

const TodoTab: React.FC<TodoTabProps> = ({ todos, fetchTodos }) => {
  const items = [
    {
      key: "1",
      label: "All",
      children: (
        <Row>
          <Col span={24}>
            <List
              dataSource={todos || []}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "Completed",
      children: (
        <Row>
          <Col span={24}>
            <List
              dataSource={(todos && todos.filter((todo) => todo.completed)) || []}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      ),
    },
    {
      key: "3",
      label: "Incomplete",
      children: (
        <Row>
          <Col span={24}>
            <List
              dataSource={(todos && todos.filter((todo) => !todo.completed)) || []}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default TodoTab;
