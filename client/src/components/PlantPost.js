import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

function PlantPost({user}){
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    

   function handleSubmit(e){
       e.preventDefault();
       fetch('/uploads', {
            method: "POST",
            headers: {
            "Content-type": "application/json",
        },
            body: JSON.stringify({
                image: image,
                description: description,
                likes: 0,
                user_id: user.id
            }),
        })
        .then((r) => r.json())
        
   }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Create a Post: </Form.Label>
                    <Form.Control as="textarea" rows="2" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                    <Form.Control as="textarea" rows="1" value={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
                    <Button type='submit' name='submit'>Seed!</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default PlantPost