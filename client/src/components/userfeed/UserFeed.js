import React, { useState, useEffect } from "react";
import FeedCard from "../feedcard/FeedCard";
import { Container, Row, Col } from "react-bootstrap";
import "./UserFeed.css"

function UserFeed({feed}) {



  return (
    <div>
      
      <Container>
        <h2 className="feedCard">my feed</h2>
      </Container>
      <div className="feedCard">
      {feed.map((f) => {
        return (
          <FeedCard 
            name = {f.user.username}
            image = {f.image}
            description = {f.description}
            likes = {f.likes}
            key = {f.id}
            id = {f.id}
            pic = {f.user.image}
            userId={f.user.id}

          />
        )
      })}
      </div>
    </div>
  );
}

export default UserFeed;
