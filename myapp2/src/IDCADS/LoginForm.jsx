import { useEffect,useRef } from "react";
import { React, useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { userData } from "../config";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const eleUserName = useRef();
  const elePassword = useRef();


  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setIsvalid(false);
      if (
        userData.userName === username.trim() &&
        userData.password === password.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem('password',userData.password)
      }
    } else setIsvalid(true);

  }, [username, password]);
  useEffect(()=>{
    if(localStorage.getItem('userName')){
      eleUserName.current.value=localStorage.getItem("userName")
      elePassword.current.focus();
    } else{
      eleUserName.current.focus();
    }
  })
  return (
    <div>
      {isSuccess ? (
        <h1>Congratulations!!! You Have Successfully Logged In,</h1>
      ) : (
        <div>
          <Card className="login">
            <Row>
              <Col lg={12}>
                <Form.Control
                  type="text"
                  onChange={(e) => setusername(e.target.value)}
                  placeholder="User Name"
                  ref={eleUserName}
                ></Form.Control>
              </Col>
              <Col lg={12}>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  ref={elePassword}
                ></Form.Control>
              </Col>
            </Row>
            {!isSuccess && !isvalid && <p className="wrong">Please enter correct username or password !</p>}
            <Row>
              <Col lg={12}>
                <Button disabled={isvalid}>Submit</Button>
                <Button variant="danger">Cancel</Button>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
