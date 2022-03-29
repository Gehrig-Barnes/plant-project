import './App.css';
import React, { useEffect, useState } from "react";
import Login from '../login/Login';
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from '../navbar/NavBar';
import {Container, Alert} from 'react-bootstrap';
import Profile from '../profile/Profile'
import { useSelector, useDispatch } from "react-redux";
import { fetchUploads } from "../plantpost/postsSlice";
import UploadEdit from '../uploadEdit/UploadEdit'
import UserFeed from '../userfeed/UserFeed'
import FollowProfile from '../profile/FollowProfile'

function App() {
  const [user, setUser] = useState(null);
  const [removeRequest, setRemoveRequest] = useState(false);
  const [plants, setPlants] = useState([])
  const uploadData = useSelector((state) => state.posts.entities);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUploads());
  }, [dispatch]);

  function updateHandler(about){
    setUser(about)
  }

  useEffect(() => {
    fetch("/uploads")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, [removeRequest]);

  useEffect(() => {
    fetch("/all_users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  function handleRemovePlant(id) {
    fetch(`/uploads/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(setRemoveRequest(!removeRequest))
  }

  useEffect(() => {
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
    navigate("/");
}

useEffect(() => {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.85&lon=-87.65&appid=0479cadb45fb034e2df702f81bb7355a")
    .then((r) => r.json())
    .then((data) => setWeather(data));
}, []);

if (!user) return (
    <>
    <Container>

    </Container>
    <Login onLogin={setUser}/>
    </>
  );

  return (
    <div className="App">
     <NavBar user={user} handleLogOutClick={handleLogOutClick}/>
     <Routes>
       <Route path="/user/:id" element={<FollowProfile user={user}/>}/>
       <Route path="profile/:id" element={<UploadEdit/>}/>
       <Route path="/profile" element={<Profile uploadData={uploadData} user={user} updateHandler={updateHandler} handleRemovePlant={handleRemovePlant}/>}/>
       <Route path='/' element={<UserFeed user={user} weather={weather} users={users}/>}/>
     </Routes>
    </div>
  );
}

export default App;
