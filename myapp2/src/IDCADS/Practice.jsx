import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Practice = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>click to {count}</p>
      <Button onClick={() => setCount(count + 2)}>Table 2</Button>Space
      <Button onClick={() => setCount(count - 1)}>Minus</Button>
    </div>
  );
};

export default Practice;

