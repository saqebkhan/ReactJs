import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { axios } from "axios";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  const handleapi = () => {
    axios.get("http://localhost:6000/").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Row>
        <Col>
          <Button
            variant={cntr >= 2 ? "success" : "danger"}
            disabled={!cntr > 0}
            onClick={() => setCntr(cntr - 1)}
          >
            -
          </Button>
        </Col>
        <Col>
          <h1>{cntr}</h1>
        </Col>
        <Col>
          <Button
            variant={cntr <= 1 ? "success" : "success "}
            onClick={() => setCntr(cntr + 1)}
            disabled={cntr >= 10}
          >
            +
          </Button>
        </Col>
        <Row>
          <Col>
            <Button onClick={handleapi}>Call My Api</Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Counter;
