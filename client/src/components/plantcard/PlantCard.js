import React, {useState} from 'react'

import deleteUpload from '../plantpost/postsSlice'
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'

 

function PlantCard({image, description, likes, date, handleRemovePlant, id}){

    const dispatch = useDispatch();


    function handleRemove(){
        dispatch(deleteUpload(id))
    }
    return (
        <div>
           <h1>{description}</h1>
           <img src={image}/>
           <h1>{likes}</h1>
           <button onClick={() => handleRemovePlant(id)}>Remove</button>
           <Link to={`/profile/${id}`} className="seemorebutton">Edit</Link>
        </div>
    )
}

export default PlantCard