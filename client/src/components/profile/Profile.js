import React, { useState } from "react";
import PlantCard from '../plantcard/PlantCard'
import AboutPatch from '../aboutpatch/AboutPatch'
import PlantPost from '../plantpost/PlantPost'
import FollowingCard from '../FollowingCard/FollowingCard'
import FollowerCard from '../FollowingCard/FollowerCard'
import { Card, Button, ListGroup, Dropdown, Modal } from 'react-bootstrap'

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
            <img src={user.image}/>
            {/* have own card */}
            <h3>{user.username}</h3>
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
            
            
          
            <h3>about me:{user.about}</h3>
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
            {/* have own card */}
            <PlantPost user={user} updateHandler={updateHandler} uploadData={uploadData}/>
            {/* have own card */}
            <h3>My Post</h3>
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
        </div>
    )
}

export default Profile