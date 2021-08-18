import { React, useState } from "react";
import { Card, Form, Button, Row, Col, Image } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <Card className="cardatd">
              <Image className="imgtdl" src="https://img.freepik.com/free-vector/manager-completing-tasks-time-vector-illustration_92753-1226.jpg?size=626&ext=jpg"  />
              <br></br>

        <Row>
          <Col md={9}>
            <Form.Control
              type="text"
              placeholder="Add here..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            ></Form.Control>
          </Col>
          <Col md={3}>
            <Button
              variant="outline-success"
              style={{ backgroundColor: "", color: "white" }}
              onClick={() => {
                setNewTodo("");
                handleAdd(newTodo);
              }}
              disabled={newTodo === ""}
            >
              Add Task
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
