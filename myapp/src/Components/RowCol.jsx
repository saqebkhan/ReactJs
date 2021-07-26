import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { employeeReducer } from "./EmployeeReducer";
// import './css/RowCol.css'

export const RowCol = () => {
  const { firstname, lastname, lineNo1, lineNo2, cityName } =
    employeeReducer.Data[0];
  const [fname, setFname] = useState("firstname");
  const [lname, setLname] = useState("lastname");
  const [line1, setline1] = useState("lineNo1");
  const [line2, setline2] = useState("lineNo2");
  const [city, setCity] = useState("cityName");

  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          onChange={(e) => setFname(e.target.value)}
                          value={fname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Address:</Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="line 1"
                          onChange={(e) => setline1(e.target.value)}
                          value={line1}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="line 2"
                          onChange={(e) => setline2(e.target.value)}
                          value={line2}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Row>
                  <Col>
                    <h4>{`${fname}${lname},`}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>{`${line1}`}</Col>
                </Row>
                <Row>
                  <Col>{`${line2}`}</Col>
                </Row>
                <Row>
                  <Col>{`${city};`}</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
