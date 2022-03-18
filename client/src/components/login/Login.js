import React from "react"
import { useState } from "react";
import LoginForm from "../loginform/LoginForm";
import SignUpForm from "../signupform/SignUpForm";
import {Container, Button, Figure, Row, Col} from 'react-bootstrap';


function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col>
                    <Figure>
                        <Figure.Image width={600} alt="Inventory & POS" />
                    </Figure>
                </Col>
                <Col>
                    { showLogin ? (
                        <>
                            <LoginForm onLogin={onLogin} />
                            <div>Don't have an account? &nbsp;
                                <Button variant="outline-dark" onClick={() => setShowLogin(false)}>
                                    Sign Up
                                </Button>
                                
                            </div>
                        </>
                    ): (
                        <>
                            <SignUpForm onLogin={onLogin} />
                            <p>
                                Already have an account? &nbsp;
                                <Button  className="m-3" variant="outline-dark" onClick={() => setShowLogin(true)}>
                                    Log In
                                </Button>
                            </p>
                        </>
                    )
                    }
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Login