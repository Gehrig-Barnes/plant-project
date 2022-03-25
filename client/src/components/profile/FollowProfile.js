import React, {useState, useEffect} from 'react'
import {useParams, useNavigate } from 'react-router-dom';
import FollowPlantCard from '../plantcard/FollowPlantCard'
import {Button, Modal} from 'react-bootstrap'
import FollowingCard from '../FollowingCard/FollowingCard'
import FollowerCard from '../FollowingCard/FollowerCard'

function FollowProfile ({user}){
    const {id} = useParams();
    const [otherUser, setOtherUser] = useState('')
    const [follow, setFollow] =useState(false)
    const [showFollowing, setShowFollowing] = useState(false);
    const [showFollowers, setShowFollowers] = useState(false);
    const [followingsId, setFollowingsId] = useState([])
    const followings = otherUser.followings;
    const followers = otherUser.followers;
    
    console.log(otherUser.id)
    

    function handleFollow(){
        if (!follow) {
            
            fetch('/follows', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                follower_id: user.id, 
                followed_user_id: otherUser.id
            }),
        })
        .then((r) => r.json())
        .then((data) => {
            setFollow(true)
            
           
        })
        }
        else if (follow){
            fetch('/delete_follow', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    follower_id: user.id, 
                    followed_user_id: otherUser.id
                }),
            })
            .then((r) => r.json())
            .then((data) => {
                setFollow(false)
               
            })
        }
    }
    
    function handleShowFollowing (){
        setShowFollowing(!showFollowing);
    }

    function handleShowFollowers(){
        setShowFollowers(!showFollowers);
    }

    const uploads = otherUser.uploads;

    useEffect(() => {
      fetch(`/user_followings`)
        .then((r) => r.json())
        .then((data) => {
          setFollowingsId(data);
          
        });
    }, []);

    useEffect(() => {
        fetch(`/user_follow/${id}`)
          .then((r) => r.json())
          .then((data) => {
            setOtherUser(data);
            followingsId.includes(data.id) ? setFollow(false) : setFollow(true)
            
          });
      }, [id]);

      
    return (
        <div>
            
            <img src={otherUser.image}/>
            {follow?(
                <Button onClick={handleFollow}>Unfollow</Button>
            ):(
                <Button onClick={handleFollow}>
                    follow
                </Button>
            )}
            <h3>{otherUser.username}</h3>
            
            <h3>about me:{otherUser.about}</h3>
            <h4 onClick={handleShowFollowing}>Following: {followings ? followings.length : console.log(null)}</h4>
            <h4 onClick={handleShowFollowers}>Followers: {followers ? followers.length : console.log(null)}</h4>

            <Modal show={showFollowing} onHide={handleShowFollowing}>
                <Modal.Header closeButton>
                    <Modal.Title>Following</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {followings && followings.map((following) => {
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
                    {followers && followers.map((follower) => {
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
            
            <h3>My Post</h3>
            {uploads?.map((post) => {
                return (
                    <FollowPlantCard 
                        key = {post.id}
                        image = {post.image}
                        description = {post.description}
                        likes = {post.likes}
                        id = {post.id}
                        
                    />
                )
            })}
            
        </div>
    )
}

export default FollowProfile