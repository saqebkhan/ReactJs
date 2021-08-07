import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import Meaning from "./Meaning";
// import Meaning from './Meaning'

export const LeftContent = ({ hanlesearch,setWordSearch,handleKeyPress }) => {
  return (
    <div>
      <Card className="pronounciation"> 
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Search here"
              onChange={(e) => setWordSearch(e.target.value)}
            ></Form.Control>
            <span>Pronouncination</span>
            <Button>Play</Button>
          </Col>
          <Col md={2}>
            <Button onClick={hanlesearch} onKeyPress={handleKeyPress}>Search</Button>
          </Col>
        </Row>

        <span>Pronoun</span>
        
      </Card>
    </div>
  );
};

export default LeftContent;
