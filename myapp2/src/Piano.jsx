import React from "react";
import {Button} from 'react-bootstrap'
import "./Piano.css";

 const Piano = () => {
  return (
    <div>
      <Button variant="outline-dark">SA</Button>
      <Button variant="outline-dark">RE</Button>
      <Button variant="outline-dark">GA</Button>
      <Button variant="outline-dark">MA</Button>
      <Button variant="outline-dark">PA</Button>
      <Button variant="outline-dark">DA</Button>
      <Button variant="outline-dark">NI</Button>
    </div>
  );
};

export default Piano;
