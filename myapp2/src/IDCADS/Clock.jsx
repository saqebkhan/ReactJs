import React, {useState, useEffect} from "react";
import {Card,Row,Col} from 'react-bootstrap'
import "../IDCADS/ghadi.css"


export const Clock = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(59);
  const [hour, sethour] = useState(0);

  setTimeout(()=>{
    setSec(sec+1)
    if (sec === 59){
      setMin(min+1)
      setSec(0)

      if(min === 59){
        sethour(hour+1)
        setMin(0)
        setSec(0)
        
      }
    }
  },1000)





  return (
    <div>
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
    <Card className={"clock"}>
      <h1>Stop Watching Me!</h1>
      <span style={{ color: "white" }}>{hour} : {min} : {sec}</span>
      
      
    </Card>
    </Col>
    <Col md={4}></Col>
    </Row>
    </div>
  );
};

export default Clock;