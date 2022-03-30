import React, { useState } from "react";

import deleteUpload from "../plantpost/postsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, Modal, Col, Row } from "react-bootstrap";

function PlantCard({ image, description, likes, date, handleRemovePlant, id }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(deleteUpload(id));
  }
  return (
    <div>
      <Card style={{ width: "28rem" }} className="posts">
      <p>{description}</p>
      <img src={image} />
      <p>Claps: {likes}</p>
      <Button onClick={() => handleRemovePlant(id)}>Remove</Button>
      <br></br>
      <Link to={`/profile/${id}`} className="seemorebutton">
        Edit
      </Link>
      </Card>
    </div>
  );
}

export default PlantCard;
