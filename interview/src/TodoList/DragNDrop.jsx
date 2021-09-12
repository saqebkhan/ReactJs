import React from "react";
import Draggable from "react-draggable";
import {Card} from 'react-bootstrap';
import "./DND.css"

const DND = () => {
  return (
    <React.Fragment>
      <Card className="todoCard">
      <Draggable>
          <div>
        HI I AM MOVABLE
        </div>
      </Draggable>
      </Card>
    </React.Fragment>
  );
};

export default DND;
