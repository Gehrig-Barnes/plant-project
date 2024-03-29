import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function FollowerCard({ image, username, id, handleShowFollowers }) {
 
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={image} alt={image} width="50" height="50" />
          </Col>
          <Col>
            <Link onClick={handleShowFollowers} to={`/user/${id}`}>{username}</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FollowerCard;
