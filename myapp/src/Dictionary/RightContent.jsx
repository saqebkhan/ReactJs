import React from "react";
import { Card, Button, Dropdown } from "react-bootstrap";

export const RightContent = () => {
  return (
    <div>
      <Card className="RightContent">
        <p>Right Content here</p>
        <Button>English</Button>
      </Card>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Language (English)
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English UK</Dropdown.Item>
          <Dropdown.Item href="#/action-2">English US</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default RightContent;
