import React from "react";
import { Card } from "react-bootstrap";
import Meaning from "./Meaning";
// import Dictionary from "./Dictionary";

export const MeaningList = ({ item }) => {
  return (
    <div>
      <Card className={"cards"}>
        <h2>{item.word}</h2>
        {item.meanings.map((m) => (
          <Meaning m={m} />
        ))}
      </Card>
    </div>
  );
};

export default MeaningList;
