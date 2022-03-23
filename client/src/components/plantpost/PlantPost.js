import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { uploadAdded } from "./postsSlice";
import { addNewPost } from "./postsSlice";

function PlantPost({user, uploadData}){
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch();

    function manageImage(e){
        const value = e.target.value
        setImage(value)
    }

    function manageDescription(e){
        const value = e.target.value
        setDescription(value)
    }
    
    const newPost = {
        // id: uploadData.length + 1,
        image: image,
        description: description,
        likes: 0,
        user_id: user.id
    }

    function handleSubmit(event) {
    event.preventDefault();
    dispatch(addNewPost(newPost));
    
  }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Create a Post: </Form.Label>
                    <Form.Control as="textarea" rows="2" value={description} onChange={manageDescription}></Form.Control>
                    <Form.Control as="textarea" rows="1" value={image} onChange={manageImage}></Form.Control>
                    <Button type='submit' name='submit'>Seed!</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default PlantPost