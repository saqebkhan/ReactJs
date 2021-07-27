import React, { useState } from "react";
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import { RowColReducer } from "../Reducer/RowColReducer";
import "./RowCol.css";
// import './css/RowCol.css'

export const RowCol = () => {
  const { firstname, lastname, lineNo1, lineNo2, cityName, stateName } =
    RowColReducer.Data[0];
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [line1, setline1] = useState("");
  const [line2, setline2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [qualification, setQname] = useState("");
  const [dob, setDob] = useState("");
  const [bulbState, setBulbState] = useState("On");

  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={4}>
          <Card id={bulbState === "On" ? "abc" : "abcAcc"}>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Row>
                      <Form.Label>First Name:</Form.Label>
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
                      <Form.Label>Last Name:</Form.Label>
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
                      <Form.Label>Qualification:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Qualification"
                          onChange={(e) => setQname(e.target.value)}
                          value={qualification}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Label>DOB:</Form.Label>
                      <Col>
                        <Form.Control
                          type="date"
                          placeholder="Date Of Birth"
                          onChange={(e) => setDob(e.target.value)}
                          value={dob}
                        ></Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label>
                          <b>Address:</b>
                        </Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Label>House No:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="House No."
                          onChange={(e) => setline1(e.target.value)}
                          value={line1}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Label>Street:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Street"
                          onChange={(e) => setline2(e.target.value)}
                          value={line2}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Label>City:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Label>State:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>Submit</Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={5}>
          <Row>
            <Col>
              <Card id={bulbState === "On" ? "abcd" : "abcdAcc"}>
                <Row>
                  <Col>
                    <h5>{`Name : ${fname} ${lname}`}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>{`Qualification : ${qualification} `}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>{`D-O-B: ${dob}`}</h5>
                  </Col>
                </Row>
                <Row>
                  <p>
                    <b>Adreess:</b>
                  </p>
                  {` House Number ${line1} ,`}
                </Row>
                

                {`${line2},`}
                

                {`${city},`}
                

                {`${state}.`}
              </Card>
            </Col>
          </Row>
        </Col>
        
        <Col md={2}>
        <Image
        class="img"
        src={`bulb${bulbState}.png`}
        height="200px"
        width="100px"
        onClick={() =>
          bulbState === "Off" ? setBulbState("On") : setBulbState("Off")
        }>
          </Image>
          </Col>
      </Row>
    </div>
  );
};
