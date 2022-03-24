import React, {useState, useEffect} from 'react'
import FeedCard from '../feedcard/FeedCard'


function UserFeed ({user}){
    const [followings, setFollowings] = useState([])
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("/all_users")
          .then((r) => r.json())
          .then((data) => setUsers(data));
      }, []);
    
     
      console.log(users)
      

    return (
        <div>
            
        </div>
    )
}

export default UserFeed