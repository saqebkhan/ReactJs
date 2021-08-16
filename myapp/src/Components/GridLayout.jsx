import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "GridLayout.css"

export const GridLayout = () => {
  return (
    <div>
      <Container>
        <Row>
            
          <Col>
            <input type="text" placeholder="First Name"></input>
          </Col>
          <Col>
            <input type="text" placeholder="Middle Name"></input>
          </Col>
          <Col>
            <input type="text" placeholder="Last Name"></input>
          </Col>
        </Row>
        <Row>
          <input type="number" placeholder="Phone Number"></input>
          <input type="email" placeholder="Email"></input>
        </Row>
        <Row>
          <input type="text" placeholder="Current Address"></input>
        </Row>
        <Row>
          <input type="text" placeholder="Permanent Address"></input>
        </Row>
        <Row>
          <input type="submit" placeholder="Submit"></input>
        </Row>
      </Container>
    </div>
  );
};

export default GridLayout;
