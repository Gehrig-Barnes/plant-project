import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AboutPatch({ user, updateHandler }) {
  const [about, setAbout] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/edit_about/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        about: about,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        updateHandler(data);
        setAbout("");
      });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>About Me:</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
          <Button type="submit" name="submit">
            Update
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AboutPatch;
