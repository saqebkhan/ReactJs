import React from "react";
import { Button } from "react-bootstrap";
import "./Piano.css";

const Piano = () => {
  return (
    <div className="sound">
      <Button variant="outline-dark" className="sa">
        SA
      </Button>
      <Button variant="outline-dark" className="sa">
        RE
      </Button>
      <Button variant="outline-dark" className="sa">
        GA
      </Button>
      <Button variant="outline-dark" className="sa">
        MA
      </Button>
      <Button variant="outline-dark" className="sa">
        PA
      </Button>
      <Button variant="outline-dark" className="sa">
        DA
      </Button>
      <Button variant="outline-dark" className="sa">
        NI
      </Button>
    </div>
  );
};

export default Piano;
