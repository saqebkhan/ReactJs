import { React, useState } from "react";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";
import { Row, Col, Card } from "react-bootstrap";
import "./HomeToDo.css";

export const HomeToDo = () => {
  const [todoitems, setTodoitems] = useState(["Completed All"]);
  const handleAdd = (newTodo) => {
    setTodoitems([...todoitems, newTodo]);
  };

  return (
    <div>
      <Card className="card1">
        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <AddToDo handleAdd={handleAdd} />
          </Col>
          <Col md={5}>
            {/* <ToDoItem item={"Completed All"} /> */}
            <ToDoList todoitems={todoitems} />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Card>
    </div>
  );
};
