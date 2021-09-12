import React from 'react';
import { Card } from "react-bootstrap";
// import { ToDoItem } from "./ToDoItem";
import TDI from './TDI';
// import DND from './DND';

export const TDL = ({todoitems}) => {
    return (
        <div>
            <Card className="cardtdl">
        {todoitems.map((item) => (
          <TDI item={item} />
        ))}
      </Card>
        </div>
    );
};

export default TDL;