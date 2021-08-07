import React, { useState } from "react";
// import Meaning from "./Meaning";
import { Row, Col, Card } from "react-bootstrap";
import "./Dictionary.css";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import MeaningList from "./MeaningList";
import axios from "axios";

const Dictionary = () => {
  const [resData, setResData] = useState([]);
  const [wordSearch, setWordSearch] = useState(" ");

  const hanlesearch = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`)
      .then((res) => {
        console.log(res.data);
        setResData([...res.data]);
      })
  };
  
  const handleKeyPress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode == 13) {
    hanlesearch();
  }
};
  
  return (
    <div>
      <Card className={"dictionary"}>
        <Row>
          <Col md={2}></Col>
          <Col md={6}>
            {/* <MeaningList wordSearch={WordSearch}/> */}
            <LeftContent
              hanlesearch={hanlesearch}
              resData={resData}
              setWordSearch={setWordSearch}
              handleKeyPress={handleKeyPress}
            />
            {resData.map(
              (item) =>
                item.meanings.length > 0 && <MeaningList item={item} />
            )}

            {/* <MeaningList />
            <MeaningList /> */}
          </Col>
          <Col md={4}>
            <RightContent />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dictionary;
