import React, { useState } from "react";
import { Card} from "react-bootstrap";

function FollowPlantCard({ image, description, likes, id }) {
  const [clap, setClap] = useState(0);
  

  function handleLike() {
    setClap(clap + 1);

    fetch(`/uploads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + clap + 1,
      }),
    }).then((r) => r.json());
  }

  return (
    <div>
      <Card style={{ width: "28rem" }} className="posts">
      <p>{description}</p>
      <img src={image} alt={image}/>
      <p>Claps: {likes + clap}</p>
      <br></br>
      <button onClick={handleLike}>👏</button>
      </Card>
    </div>
  );
}

export default FollowPlantCard;
