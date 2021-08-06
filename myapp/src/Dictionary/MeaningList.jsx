import React from "react";
import { Card } from "react-bootstrap";
import Meaning from "./Meaning";
// import Dictionary from "./Dictionary";

export const MeaningList = ({ falan }) => {
  return (
    <div>
      <Card className={"cards"}>
        <h2>{falan.word}</h2>
        {falan.meanings.map((m) => (
          <Meaning m={m} />
        ))}
      </Card>
    </div>
  );
};

export default MeaningList;
