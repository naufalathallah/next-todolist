import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, List } from "antd";
import { getTodos } from "../services/todoService";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const { TabPane } = Tabs;

const TodoTab: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="All" key="1">
        <Row>
          <Col span={24}>
            <List
              dataSource={todos}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Completed" key="2">
        <Row>
          <Col span={24}>
            <List
              dataSource={todos.filter((todo) => todo.completed)}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Incomplete" key="3">
        <Row>
          <Col span={24}>
            <List
              dataSource={todos.filter((todo) => !todo.completed)}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
};

export default TodoTab;
