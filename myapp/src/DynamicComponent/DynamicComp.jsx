import React from "react";
import { candidateData } from "../Reducer/DynamicCompRed";
import { Card, Row, Col, Form } from "react-bootstrap";
import "./DynamicComp.css";

export const DynamicComp = () => {
  return (
    <div>
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: "Orange" }}>
            {Object.keys(candidateData).map((key) => (
              <p>
                {key}:
                <Form.Control
                  Data={candidateData[key].data}
                  type={candidateData[key].type}
                  value={candidateData[key].data}
                  placeholder={candidateData[key].palceholder}
                ></Form.Control>
              </p>
            ))}
          </Card>
        </Col>
        <Col md={8}></Col>
      </Row>
    </div>
  );
};
