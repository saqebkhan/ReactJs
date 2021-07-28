import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const NewComp = () => {
  const [colorName, setColorName] = useState("Orange");

  const bluehandler = () => {
    setColorName("blue");
  };
  return (
    <div>
      <Card>
        <Button
          variant="link"
          onClick={() =>
            colorName === "blue" ? setColorName("purple") : setColorName("blue")
          }
        >
          Change Me
        </Button>
        <h1>
          <span style={{ color: "blue" }}>Pickup</span>
          <span style={{ color: "yellow" }}>Biz</span>
        </h1>
        <p>This is my content</p>
        <span style={{ backgroundColor: colorName }}>
          <h1 style={{ color: "White" }}>PDAC Courses</h1>
        </span>
      </Card>
      <br />

      <center>
        <br />
        <br />
        <Button
          style={{ width: "680px" }}
          variant="outline-info"
          onClick={bluehandler}
        >
          Blue
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "500px" }}
          variant="outline-danger"
          onClick={() => setColorName("red")}
        >
          Red
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "350px" }}
          variant="outline-success"
          onClick={() => setColorName("green")}
        >
          Green
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "500px" }}
          variant="outline-danger"
          onClick={() => setColorName("orange")}
        >
          Orange
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "680px" }}
          variant="outline-warning"
          onClick={() => setColorName("yellow")}
        >
          Yellow
        </Button>
      </center>
    </div>
  );
};

export default NewComp;
