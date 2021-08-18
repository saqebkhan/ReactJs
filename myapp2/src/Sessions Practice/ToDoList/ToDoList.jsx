import { React } from "react";
import { Card } from "react-bootstrap";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todoitems }) => {
  return (
    <div>
      <Card className="cardtdl">
        {todoitems.map((item) => (
          <ToDoItem item={item} />
        ))}
      </Card>
    </div>
  );
};
