import React, { useState } from "react";
import PlantCard from '../plantcard/PlantCard'
import AboutPatch from '../aboutpatch/AboutPatch'
import PlantPost from '../plantpost/PlantPost'
import FollowingCard from '../FollowingCard/FollowingCard'
import FollowerCard from '../FollowingCard/FollowerCard'
import { Card, Modal, Col, Row } from 'react-bootstrap'
import './profile.css'

function Profile({user, updateHandler, handleRemovePlant, uploadData}){
    const [flipAbout, setFlipAbout] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [showFollowers, setShowFollowers] = useState(false);
    const uploads = user.uploads;
    const followings = user.followings;
    const followers = user.followers;
    
    
    
    function handleFlipAbout(){
        setFlipAbout(!flipAbout);
    }

    function handleShowFollowing (){
        setShowFollowing(!showFollowing);
    }

    function handleShowFollowers(){
        setShowFollowers(!showFollowers);
    }
  
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col>
                    <Card style={{ width: '10rem'}} className="profile_card">
                        <Card.Img src={user.image}/>
                        <Card.Body>
                            <Card.Title>{user.username}</Card.Title>
                            <h4 onClick={handleShowFollowing}>Following: {followings.length}</h4>
                            <h4 onClick={handleShowFollowers}>Followers: {followers.length}</h4>
                    
                            <Modal show={showFollowing} onHide={handleShowFollowing}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Following</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {followings.map((following) => {
                                        return (
                                            <FollowingCard
                                                key={following.id}
                                                username={following.username}
                                                image={following.image}
                                                id={following.id}
                                            />
                                        )
                                    })}
                                </Modal.Body>
                            </Modal>

                            <Modal show={showFollowers} onHide={handleShowFollowers}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Followers</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {followers.map((follower) => {
                                        return (
                                            <FollowerCard
                                                key={follower.id}
                                                username={follower.username}
                                                image={follower.image}
                                                id={follower.id}
                                            />
                                        )
                                    })}
                                </Modal.Body>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '30rem'}} className="about_me">
                        <Card.Body>
                            <Card.Title>about me:</Card.Title>
                            <Card.Text>{user.about}</Card.Text>
                            {flipAbout?(
                                    <div>
                                    <AboutPatch user={user} updateHandler={updateHandler}/>
                                    <button onClick={handleFlipAbout}>close</button>
                                    </div>
                                ):(
                                    <div>
                                        <button onClick={handleFlipAbout}>Edit</button>
                                    </div>
                                )}
                        </Card.Body>
                    </Card >
                    <Card style={{ width: '30rem'}} className="post_card">
                        <PlantPost user={user} updateHandler={updateHandler} uploadData={uploadData}/>
                    </Card>
                </Col>
            </Row>

            <h3 className="my_post_title">My Posts</h3>
            <Card style={{ width: '28rem'}} className="posts">
            {uploads.map((post) => {
                return (
                    <PlantCard 
                        key = {post.id}
                        id = {post.id}
                        image = {post.image}
                        description = {post.description}
                        likes = {post.likes}
                        date = {post.created_at}
                        handleRemovePlant = {handleRemovePlant}
                    />
                )
            })}
            </Card>
        </div>
    )
}

export default Profile