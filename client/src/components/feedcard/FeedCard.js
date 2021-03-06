import React, { useState } from "react";
import { Card, Modal, Col, Row, Container } from "react-bootstrap";
import "./feedcard.css"
import { Link, useNavigate } from "react-router-dom";

function FeedCard({name, image, description, likes, id, pic, userId}) {
  const [clap, setClap] = useState(0);
  const navigate = useNavigate()

  function handleLike() {
    setClap(clap + 1);

    fetch(`/uploads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + clap + 1,
      }),
    }).then((r) => r.json());
  }

  function handleNav(){
    navigate(`/user/${userId}`)
  }

  return (
  <div>
    <Card style={{ width: "28rem" }} className="posts" id="post">
      
        <Row>
          <Col>
            <Card.Img src={pic} alt="picture" id="pic" width="15" onClick={handleNav}/>
          </Col>
          <Col>
            <h1 id="name" onClick={handleNav}>{name}</h1>
          </Col>
        </Row>
      
      <img src={image} alt="post"/>
      <h1>{description}</h1>
      <p>Claps: {likes + clap}</p>
      <br></br>
      <br></br>
      <button onClick={handleLike}>👏</button>
      
    </Card>
  </div>
  );
}

export default FeedCard;
