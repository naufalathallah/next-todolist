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

const { TabPane } = Tabs;

const TodoTab: React.FC<TodoTabProps> = ({ todos, fetchTodos }) => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="All" key="1">
        <Row>
          <Col span={24}>
            <List
              dataSource={todos || []}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Completed" key="2">
        <Row>
          <Col span={24}>
            <List
              dataSource={(todos && todos.filter((todo) => todo.completed)) || []}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Incomplete" key="3">
        <Row>
          <Col span={24}>
            <List
              dataSource={(todos && todos.filter((todo) => !todo.completed)) || []}
              renderItem={(todo: Todo) => <TodoItem key={todo.id} {...todo} onUpdate={fetchTodos} />}
            />
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
};

export default TodoTab;
