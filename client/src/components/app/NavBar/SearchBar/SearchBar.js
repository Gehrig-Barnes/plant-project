import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSearch, filterSearch, search }) {
  let navigate = useNavigate();
  function handleUserName(e) {
    let value = e.target.value;
    setSearch(value);
  }

  function testStuff() {
    if (search !== "") {
      const createButton = filterSearch().map((user) => {
        return (
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={() => {
              navigate(`/user/${user.id}`);
              setSearch("");
            }}
            key={user.id}
          >
            <link></link>
            {user.username}
          </button>
        );
      });
      return createButton;
    }
  }

  return (
    <div className="search-bar-dropdown">
      <input
        type="text"
        name="user_name"
        className="form-control"
        onChange={handleUserName}
        value={search}
      ></input>
      <ul className="list-group">{testStuff()}</ul>
    </div>
  );
}

export default SearchBar;
