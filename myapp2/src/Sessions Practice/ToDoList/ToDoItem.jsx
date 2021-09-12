import { React, useState } from "react";
import { Card, Row, Col, Form, Image } from "react-bootstrap";

export const ToDoItem = ({ item, todoitems }) => {
  const [check, setCheck] = useState(false);
  // if (todoitems.indexOf("Completed All") === check) {
  //   todoitems.forEach((item) => {
  //     item = check;
  //   });
  // };

  return (
    <div>
      <Image className="imgtdi" />
      <Card className="cardtdi">
        <Row>
          <Col md={1}>
            <Form.Check onClick={() => setCheck(!check)}></Form.Check>
          </Col>
          <Col md={11}>
            <label htmlFor="">{check ? <del>{item}</del> : item}</label>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
