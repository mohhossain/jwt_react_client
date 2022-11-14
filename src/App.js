import "./App.css";
import { Routes, Link, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import { useState, useEffect } from "react";

function App() {
  const jwt_token = localStorage.getItem("jwt");
  console.log(jwt_token);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/bio", {
      headers: {
        Authorization: "Bearer " + jwt_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        {jwt_token ? (
          <Route
            path="/profile"
            element={<Profile user={user}></Profile>}
          ></Route>
        ) : (
          <Route path="/redirect" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="*"
          element={<Navigate to="/login" replace></Navigate>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
