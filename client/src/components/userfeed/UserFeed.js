import React, {useState, useEffect} from 'react'
import FeedCard from '../feedcard/FeedCard'
import {Container, Row, Col} from 'react-bootstrap';


function UserFeed ({user, weather}){
    const [followings, setFollowings] = useState([])
    const [users, setUsers] = useState([])

    const temp = weather.main.temp
    const feelsLike = weather.main.feels_like

    console.log(feelsLike)
    
    useEffect(() => {
        fetch("/all_users")
          .then((r) => r.json())
          .then((data) => setUsers(data));
      }, []);
    
     
      
      

    return (
        <div>
            <Container>
                <Row>
                    <Col>Current Temperature: {Math.trunc((temp - 273.15) * (9/5) + 32)}°F</Col>
                    <Col>Feels Like: {Math.trunc((feelsLike - 273.15) * (9/5) + 32)}°F</Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserFeed