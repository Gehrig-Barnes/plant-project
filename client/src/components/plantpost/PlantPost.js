import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PlantPost({ user, handlePost}) {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function manageImage(e) {
    let value = e.target.value;
    setImage(value);
  }

  function manageDescription(e) {
    let value = e.target.value;
    setDescription(value);
  }

  const newPost = {
    image: image,
    description: description,
    likes: 0,
    user_id: user.id,
  };

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(addNewPost(newPost));
    // handlePost(newPost)
    fetch("/uploads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((r) => r.json())
      .then((data) => handlePost(data));
    setDescription("");
    setImage("");
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Create a Post: </Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            value={description}
            name="description"
            onChange={manageDescription}
          ></Form.Control>
          <Form.Control
            as="textarea"
            rows="1"
            value={image}
            onChange={manageImage}
          ></Form.Control>
          <Button type="submit" name="submit">
            Seed!
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PlantPost;
