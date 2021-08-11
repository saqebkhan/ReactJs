import React, { useState, useMemo } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import "./EMIcalculator.css";

const EMIcalculator = () => {
  const [p, setP] = useState("");
  const [n, setN] = useState("");
  const [r, setR] = useState("");
  // const [emi, setEMI] = useState("");
  const handleCalEMI = () => {
    const si = (p * n * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = Math.floor(repayAmount / (n * 12));
    return emiLocal;
  };
const emi = useMemo(()=>handleCalEMI(),[p,n,r])
  //component did updte / component will update ---Class Compnent
  // useEffect(()=>{
  //   handleCalEMI();

  // },[p,n,r])

  return (
    <div>
      <h1>EMI Calculator</h1>
      <br />

      <Card className="Calc">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control
              className="input1"
              type="number"
              placeholder="Principle"
              onChange={(e) => setP(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              className="input2"
              type="number"
              placeholder="Number Of Years"
              onChange={(e) => setN(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              className="input3"
              type="number"
              placeholder="Rate Of Intrset"
              onChange={(e) => setR(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button
              variant="outline-success"
              onClick={handleCalEMI}
              className="button"
            >
              {/* <Button variant="outline-success" onClick={() => handleCalEMI()}> ---we can use both--- */}
              Calculate EMI
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h1>EMI :{emi}</h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default EMIcalculator;
