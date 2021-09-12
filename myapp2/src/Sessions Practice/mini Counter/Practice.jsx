import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Practice = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <center>
      <p>click to {count}</p>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <Button onClick={() => setCount(count - 1)}>Remove</Button>
      </center>
    </div>
  );
};

export default Practice;

