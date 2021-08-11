import React, { useRef } from "react";
import { useEffect } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import Meaning from "./Meaning";
import Pronounciation, { Pronunciation } from "./pronounciation/Pronunciation";
// import Meaning from './Meaning'

export const LeftContent = ({ handlesearch, setWordSearch, resData }) => {
  const eleSearch = useRef();
  useEffect(()=>{
  eleSearch.current.focus();
})
  return (
    <div>
      <Card className="pronounciation">
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Search here"
              onChange={(e) => setWordSearch(e.target.value)}
              onKeyPress={handlesearch}
              ref={eleSearch}
            ></Form.Control>
            {resData.length > 0 && (
              <Pronunciation pData={resData[0].phonetics[0]} />
            )}
          </Col>
          <Col md={2}>
            <Button onClick={handlesearch}>Search</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LeftContent;
