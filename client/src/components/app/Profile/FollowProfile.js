import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal, Card, Col, Row } from "react-bootstrap";

import FollowPlantCard from "./plantcard/FollowPlantCard";
import FollowingCard from "./FollowingCard/FollowingCard";
import FollowerCard from "./FollowingCard/FollowerCard";
import "./profile.css";

function FollowProfile({ user }) {
  const { id } = useParams();
  const [otherUser, setOtherUser] = useState("");
  const [follow, setFollow] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [followingsId, setFollowingsId] = useState([]);
  const followings = otherUser.followings;
  const followers = otherUser.followers;
  let followingLength = followings ? followings.length : null;
  let followersLength = followers ? followers.length : null;



  function handleFollow() {
    if (!follow) {
      fetch("/follows", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          follower_id: user.id,
          followed_user_id: otherUser.id,
        }),
      });
      setFollow(true);
    } else if (follow) {
      fetch("/delete_follow", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          follower_id: user.id,
          followed_user_id: otherUser.id,
        }),
      });

      setFollow(false);
    }
  }

  function handleShowFollowing() {
    setShowFollowing(!showFollowing);
  }

  function handleShowFollowers() {
    setShowFollowers(!showFollowers);
  }

  
  const uploads = otherUser.uploads;

  useEffect(() => {
    fetch(`/user_follow/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setOtherUser(data);
        
      });
    fetch(`/user_followings`)
      .then((r) => r.json())
      .then((data) => {
        setFollowingsId(data);
        data.includes(Number(id)) ? setFollow(true) : setFollow(false);
        
      });
  }, [id]);

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col>
          <Card style={{ width: "10rem" }} className="profile_card">
            <img src={otherUser.image} alt={otherUser.image} />
            <Card.Body>
              <Card.Title>{otherUser.username}</Card.Title>
              <h4 onClick={handleShowFollowing}>
                Following: {followingLength}
              </h4>
              <h4 onClick={handleShowFollowers}>
                Followers: {followersLength }
              </h4>
              {follow ? (
                <Button onClick={handleFollow}>following</Button>
              ) : (
                <Button onClick={handleFollow}>follow</Button>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "30rem" }} className="about_me">
            <Card.Body>
              <Card.Title>about me:</Card.Title>
              <Card.Text>{otherUser.about}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="user_post_title">Posts</h3>
      <div>
        {uploads?.map((post) => {
          return (
            <FollowPlantCard
              key={post.id}
              image={post.image}
              description={post.description}
              likes={post.likes}
              id={post.id}
            />
          );
        })}
      </div>

      <Modal show={showFollowing} onHide={handleShowFollowing}>
        <Modal.Header closeButton>
          <Modal.Title>Following</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {followings &&
            followings.map((following) => {
              return (
                <FollowingCard
                  key={following.id}
                  username={following.username}
                  image={following.image}
                  id={following.id}
                  handleShowFollowing={handleShowFollowing}
                />
              );
            })}
        </Modal.Body>
      </Modal>

      <Modal show={showFollowers} onHide={handleShowFollowers}>
        <Modal.Header closeButton>
          <Modal.Title>Followers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {followers &&
            followers.map((follower) => {
              return (
                <FollowerCard
                  key={follower.id}
                  username={follower.username}
                  image={follower.image}
                  id={follower.id}
                  handleShowFollowers={handleShowFollowers}
                />
              );
            })}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FollowProfile;
