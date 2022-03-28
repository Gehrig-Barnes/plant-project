import React, {useState} from 'react'

import deleteUpload from '../plantpost/postsSlice'
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

 

function PlantCard({image, description, likes, date, handleRemovePlant, id}){

    const dispatch = useDispatch();


    function handleRemove(){
        dispatch(deleteUpload(id))
    }
    return (
        <div>
           <p>{description}</p>
           <img src={image}/>
           <p>Claps: {likes}</p>
           <Button onClick={() => handleRemovePlant(id)}>Remove</Button>
           <br></br>
           <Link to={`/profile/${id}`} className="seemorebutton">Edit</Link>
        </div>
    )
}

export default PlantCard