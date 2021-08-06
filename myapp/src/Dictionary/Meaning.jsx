import React from "react";
import { Card, Button } from "react-bootstrap";
// import Dictionary from "./Dictionary";

export const Meaning = ({ m }) => {
  return (
    <div>
      <Card className={"cards"}>
        <i>
          <b>--{m.partOfSpeech}--</b>
        </i>
        <i>
          {m.definitions.map((def, index) => (
            <p>
              <span>
                {index + 1}.{def.definition}
              </span>
            </p>
          ))}
        </i>
        <span>This is Meaning Two here</span>
      </Card>
    </div>
  );
};
export default Meaning;
