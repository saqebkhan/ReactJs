import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getEmpDetails } from "../Components/State/selectors/EmpDetailsSelector";
import { AddEmp } from "../Components/State/Action/EmpDetailsAction";
// import { empReducer } from "../Components/State/Reducers/EmpDetailsReducer";
// import { useHistory } from "react-router";


const EmpDetails = () => {
  const selector = useSelector(getEmpDetails);
  const [empData, setEmpData] = useState();
  const [mentersName, setMentersName] = useState();
  const [mentersDesc, setMentersDesc] = useState();
  const [mentersImg, setMentersImg] = useState();
  // const [empArr, setEmpArr] = useState(empReducer.empData);
  // const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    setEmpData(selector);
  }, [selector]);


  // useEffect(() => {
  //   var filterArr = empArr.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //       item.desc.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   if (searchText === "") setEmpArr(empReducer.empData);
  //   else setEmpArr(filterArr);
  // },[empArr, searchText]);

  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(AddEmp(mentersName, mentersDesc, mentersImg));
  };

  return (
    <div>
      
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Form.Control
            placeholder="Name"
            className="mt-2"
            onChange={(e) => setMentersName(e.target.value)}
          />{" "}
          <Form.Control
            placeholder="Designation"
            className="mt-2"
            onChange={(e) => setMentersDesc(e.target.value)}
          />{" "}
          <Form.Control
            placeholder="Image Name"
            className="mt-2"
            onChange={(e) => setMentersImg(e.target.value)}
          />{" "}
          <center>
            <Button
              style={{ margin: "6px", padding: "6px", textAlign: "center" }}
              onClick={handleDispatch}
            >
              Dispatch
            </Button>
          </center>
          <br />
          {empData &&
            empData.map((itemCurrent) => {
              return (
                <Card
                  style={{
                    width: "16.5rem",
                    display: "inline-block",
                    textAlign: "center",
                    backgroundColor: "orange",
                    padding: "12px",
                    margin: "8px",
                  }}
                >
                  <Card.Title
                    style={{
                      backgroundColor: "navy",
                      color: "white",
                      padding: "12px",
                    }}
                  >
                    Mentors
                  </Card.Title>
                  <Card.Body>
                    <Card.Header
                      style={{
                        backgroundColor: "navy",
                        color: "white",
                        margin: "18px",
                        padding: "2px",
                      }}
                    >
                      {itemCurrent.name}
                    </Card.Header>
                    <Card.Img
                      src={itemCurrent.img}
                      style={{ width: "10rem", height: "12rem" }}
                    />
                    <p>{itemCurrent.desc}</p>
                    <Button variant="outline-success">More Details</Button>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
};

export default EmpDetails;
