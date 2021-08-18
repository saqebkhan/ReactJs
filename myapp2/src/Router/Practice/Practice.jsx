import React from "react";
import { Card, Button } from "react-bootstrap";

export const Practice = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.Img} />
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text>{item.Text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Practice;
