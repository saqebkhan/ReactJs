import React, { useState } from "react";
import Draggable from "react-draggable";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import TDL from "./TDL";
import "./DND.css";

const DND = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todoitems, setTodoitems] = useState([""]);
  const handleAdd = (newTodo) => {
    setTodoitems([...todoitems, newTodo]);
  };

  function u() {
    var l = document.getElementById("a").value;
    var ss = (document.getElementById("s").innerHTML = l);
    return ss;
  }
  console.log(u);
  return (
    <div>
      {/* <input type="text" id="a" /> */}
      {/* <button onClick={u}></button> */}
      <Form.Control
        placeholder="Add here..."
        id="a"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></Form.Control>
      {/* <Button onClick={u} disabled={newTodo === ""} handleAdd(newTodo);> */}
      {/* Add
      </Button> */}
      <TDL todoitems={todoitems} />
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <Card className="open">
            <h1>Open</h1>
          </Card>
          <Draggable>
            <Card>
              <h2>Eating</h2>
            </Card>
          </Draggable>
          <Draggable>
            <Card>
              <h2>Drinking</h2>
            </Card>
          </Draggable>
          {todoitems.map((item) => (
            <Draggable>
              <Card>
                <h2 id="s">{item}</h2>
              </Card>
            </Draggable>
          ))}
        </Col>
        <Col md={3}>
          <Card className="wip">
            <h1>Work in progress</h1>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="done">
            <h1>Completed</h1>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      {/* <Form.Control>Hell</Form.Control> */}
      <Button
        variant="success"
        onClick={() => {
          setNewTodo("");
          handleAdd(newTodo);
        }}
        disabled={newTodo === ""}
      >
        Add Task
      </Button>
    </div>
  );
};

export default DND;
