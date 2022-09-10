import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function PlantCard({ image, description, likes, date, handleRemovePlant, id }) {
  

  
  return (
    <div>
      <Card style={{ width: "28rem" }} className="posts">
      <p>{description}</p>
      <img src={image} alt={image}/>
      <p>Claps: {likes}</p>
      <Button onClick={() => handleRemovePlant(id)}>Remove</Button>
      <br></br>
      <Link to={`/profile/${id}`} className="seemorebutton">
        Edit
      </Link>
      </Card>
    </div>
  );
}

export default PlantCard;
