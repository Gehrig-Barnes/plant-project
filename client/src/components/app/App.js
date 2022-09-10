import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUploads } from "../plantpost/postsSlice";

import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import UploadEdit from "./UploadEdit/UploadEdit";
import UserFeed from "./UserFeed/UserFeed";
import FollowProfile from "./Profile/FollowProfile";

function App() {
  const [user, setUser] = useState(null);
  const [removeRequest, setRemoveRequest] = useState(false);
  const uploadData = useSelector((state) => state.posts.entities);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    dispatch(fetchUploads());
  }, [dispatch]);

  

  useEffect(() => {
    fetch("/feed")
      .then((r) => r.json())
      .then((data) => setFeed(data));
  }, []);

  function updateHandler(about) {
    setUser(about);
  }

  useEffect(() => {
    fetch("/all_users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  function handleRemovePlant(id) {
    fetch(`/uploads/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setRemoveRequest(!removeRequest));
  }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate("/");
  }

  if (!user)
    return (
      <>
        <Container></Container>
        <Login onLogin={setUser} />
      </>
    );

  return (
    <div className="App">
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <Routes>
        <Route path="/user/:id" element={<FollowProfile user={user} />} />
        <Route path="profile/:id" element={<UploadEdit />} />
        <Route
          path="/profile"
          element={
            <Profile
              uploadData={uploadData}
              user={user}
              updateHandler={updateHandler}
              handleRemovePlant={handleRemovePlant}
            />
          }
        />
        <Route path="/" element={<UserFeed user={user} feed={feed} />} />
      </Routes>
    </div>
  );
}

export default App;
