import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import "./SignUp.css";

function SignUpForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
        age,
        gender,
        about,
        image,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <Container>
        <Card style={{ width: "20rem" }} className="sign_card">
          <Card.Body>
            <h1>Create an Account</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="current-password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  id="profile_picture"
                  type="text"
                  placeholder="Profile Picture"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  id="age"
                  type="text"
                  placeholder="age"
                  autoComplete="off"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  id="gender"
                  type="text"
                  placeholder="gender"
                  autoComplete="off"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">
                {isLoading ? "Loading..." : "Login"}
              </Button>
              {errors.map((error) => (
                <Alert className="mt-3" variant="danger" key={error}>
                  {error}
                </Alert>
              ))}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SignUpForm;
