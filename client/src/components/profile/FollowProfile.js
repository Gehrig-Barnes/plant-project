import React, {useState, useEffect} from 'react'
import {useParams, useNavigate } from 'react-router-dom';
import FollowPlantCard from '../plantcard/FollowPlantCard'
import {Button} from 'react-bootstrap'


function FollowProfile (){
    const {id} = useParams();
    const [user, setUser] = useState('')
    const [follow, setFollow] =useState(false)

    function handleFollow(){
        setFollow(!follow)
        
    }
    
    const uploads = user.uploads;

    useEffect(() => {
        fetch(`/user_follow/${id}`)
          .then((r) => r.json())
          .then((data) => {
            setUser(data);
            
          });
      }, [id]);

      
    return (
        <div>
            
            <img src={user.image}/>
            {follow?(
                <Button onClick={handleFollow}>Unfollow</Button>
            ):(
                <Button onClick={handleFollow}>
                    Follow
                </Button>
            )}
            <h3>{user.username}</h3>
            <h3>about me:{user.about}</h3>
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