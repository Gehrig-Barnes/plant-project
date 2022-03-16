import './App.css';
import React, { useEffect, useState } from "react";
import Login from './components/Login';
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar';
import {Container, Alert} from 'react-bootstrap';
import Profile from './components/Profile'

function App() {
  const [user, setUser] = useState(null);
  const [removeRequest, setRemoveRequest] = useState(false);
  const [plants, setPlants] = useState([])

  

  function updateHandler(about){
    setUser(about)
  }
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/uploads")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, [removeRequest]);

  function handleRemovePlant(id) {
    fetch(`/uploads/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(setRemoveRequest(!removeRequest))
  }


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
}

if (!user) return (
    <>
    <Container>
      <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
    </Container>
    <Login onLogin={setUser}/>
    </>
  );

  
  return (
    <div className="App">
     <NavBar user={user} handleLogOutClick={handleLogOutClick}/>
     <button onClick={handleLogOutClick}>Logout</button>
     <Routes>
       <Route path="/profile" element={<Profile user={user} updateHandler={updateHandler} handleRemovePlant={handleRemovePlant}/>}/>
     </Routes>
    </div>
  );
}

export default App;
