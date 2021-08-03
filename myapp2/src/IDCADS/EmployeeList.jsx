import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Employee.css";
import { EmployeeItem } from "./EmployeItem";
import { EmployeeReducer } from "../Reducer/EmployeeReducer";
// import {userData} from"../config"

export const EmployeeList = () => {
  const [empArr, setEmpArr] = useState(EmployeeReducer.Data);
  const [searchText, setSearchText] = useState(" ");
  const history = useHistory
  useEffect (() => {
    const filterArr = empArr.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.City.toLowerCase().includes(searchText.toLowerCase()) 
    );
    if (searchText === "") setEmpArr(EmployeeReducer.Data);
    else setEmpArr(filterArr);
  }, [searchText])

  return (
    <Card className="employeelist">
      <h2>Employee List</h2>
      <Form>
        <Form.Control
          type="text"
          onChange={(e) => setSearchText(e.target.value)} placeholder="Search"
        ></Form.Control>
      </Form>
      <Row>
        {empArr.map((item) => (
          <Col md={3}>
            <EmployeeItem itemData={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default EmployeeList;