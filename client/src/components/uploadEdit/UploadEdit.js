import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import updateUpload from '../plantpost/postsSlice'
import {useParams, useNavigate } from 'react-router-dom';

function UploadEdit(){
    let nav = useNavigate()
    const dispatch = useDispatch();
    const {id} = useParams();
    const [upload, setUpload] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
      fetch(`/uploads/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setUpload(data);
          
        });
    }, [id]);

    console.log(upload)
  
    function handleSubmit(e){
      e.preventDefault();
      fetch(`/uploads/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              description: description
          }),
      })
      .then((r) => r.json())
      .then(nav('/profile'))
      .then( window.location.reload())
  }


      

    function manageDescription(e){
        let value = e.target.value
        setDescription(value)
    }
    return (
        <div>
           <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>edit your description</Form.Label>
                    
                    <Form.Control as="textarea" rows="2"  value = {description} onChange={manageDescription} placeholder={upload.description}></Form.Control>
                    
                    <Button type='submit' name='submit'>update!</Button>
                </Form.Group>
            </Form>
        </div>
        </div>
    )
}

export default UploadEdit