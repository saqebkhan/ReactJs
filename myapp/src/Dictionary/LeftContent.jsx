import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import MeaningList from "./MeaningList";
// import Meaning from './Meaning'

export const LeftContent = ({ hanlesearch,setWordSearch }) => {
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
            <Button onClick={hanlesearch}>Search</Button>
          </Col>
        </Row>

        <span>Pronoun</span>
        {/* <Meaning />
          <Meaning /> */}
      </Card>
    </div>
  );
};

export default LeftContent;
