import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import "./Employee.css";
import { EmployeeItem } from "./EmployeItem";
import { EmployeeReducer } from "../Reducer/EmployeeReducer";

export const EmployeeList = () => {
  const [empArr, setEmpArr] = useState(EmployeeReducer.Data);
  const [searchText, setSearchText] = useState(" ");
  useEffect(() => {
    const filterArr = empArr.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.City.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setEmpArr(EmployeeReducer.Data);
    else setEmpArr(filterArr);
  }, [searchText]);
  return (
    <Card className="employeelist">
      <h2>Employee List</h2>
      <Form>
        <Form.Control
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        ></Form.Control>
      </Form>
      <Row>
        {empArr.map((item) => (
          <Col md={4}>
            <EmployeeItem itemData={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
