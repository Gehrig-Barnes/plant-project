import React from 'react'

function PlantCard({image, description, likes, date, handleRemovePlant, id}){
    return (
        <div>
           <h1>{description}</h1>
           <img src={image}/>
           <h1>{likes}</h1>
           <button onClick={() => handleRemovePlant(id)}>Remove</button>
        </div>
    )
}

export default PlantCard