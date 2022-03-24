import React, {useState} from "react";

function FollowPlantCard({image, description, likes, id}){
    const [clap, setClap] = useState(0)

    function handleLike(){
        setClap(clap + 1)
        
        fetch(`/uploads/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: likes + clap + 1,
                
            }),
        })
        .then((r) => r.json())
    }

    return (
        <div>
            <h1>{description}</h1>
            <img src={image}/>
            <h1>Claps: {likes + clap}</h1>
            <button onClick={handleLike} >👏</button>
        </div>
    )
}

export default FollowPlantCard