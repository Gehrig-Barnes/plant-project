import React, {useState, useEffect} from 'react'
import FeedCard from '../feedcard/FeedCard'
import {Container, Row, Col} from 'react-bootstrap';


function UserFeed ({user, weather, users}){
    const temp = weather && weather.main.temp
    const feelsLike = weather && weather.main.feels_like
    
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