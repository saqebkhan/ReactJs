import React from 'react';
import { Row,Col,Card, Form, Button } from 'react-bootstrap';

export const RowColForm = () => {
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
                                        placehoder="First Name">

                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control
                                        type="text"
                                        placeholder="Last Name">

                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.label>Address:</Form.label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control
                                        type="text"
                                        placeholder="line 1">

                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control
                                        type="text"
                                        placeholder="line 2">

                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control
                                        type="text"
                                        placeholder="City">

                                        </Form.Control>
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
                                <Col>Salman Shaikh</Col>
                            </Row>
                            <Row>
                                <Col>H.No. 2345</Col>
                            </Row>
                            <Row>
                                <Col>Degloor Naka</Col>
                            </Row>
                            <Row>
                                <Col>Nanded</Col>
                            </Row>
                        </Card>
                        </Col>
                    </Row>

                </Col>
                <Col md ={2}></Col>
            </Row>
            
        </div>
    );
};

