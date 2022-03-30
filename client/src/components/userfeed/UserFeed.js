import React, { useState, useEffect } from "react";
import FeedCard from "../feedcard/FeedCard";
import { Container, Row, Col } from "react-bootstrap";

function UserFeed({weather, feed}) {
  const temp = weather && weather.main.temp;
  const feelsLike = weather && weather.main.feels_like;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            Current Temperature: {Math.trunc((temp - 273.15) * (9 / 5) + 32)}°F
          </Col>
          <Col>
            Feels Like: {Math.trunc((feelsLike - 273.15) * (9 / 5) + 32)}°F
          </Col>
        </Row>
      </Container>
      {feed.map((f) => {
        return (
          <FeedCard
            name = {f.user.username}
            image = {f.image}
            description = {f.description}
            likes = {f.likes}
            key = {f.id}
            id = {f.id}
          />
        )
      })}
    </div>
  );
}

export default UserFeed;
