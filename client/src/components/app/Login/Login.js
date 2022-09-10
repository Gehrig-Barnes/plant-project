import React from "react";
import { useState } from "react";
import { Container, Button, Figure, Row, Col } from "react-bootstrap";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import "./Login.css";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col>
            <Figure>
              <Figure.Image
                width="300"
                src="https://p.kindpng.com/picc/s/2-27358_pot-plant-clipart-transparent-pot-plant-png-clipart.png"
              />
            </Figure>
          </Col>
          <Col>
            {showLogin ? (
              <>
                <LoginForm onLogin={onLogin} />
                <div className="sign_up">
                  Don't have an account? &nbsp;
                  <Button
                    variant="outline-dark"
                    onClick={() => setShowLogin(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </>
            ) : (
              <>
                <SignUpForm onLogin={onLogin} />
                <p className="log_in">
                  Already have an account? &nbsp;
                  <Button
                    className="m-3"
                    variant="outline-dark"
                    onClick={() => setShowLogin(true)}
                  >
                    Log In
                  </Button>
                </p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
