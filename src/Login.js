import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();
    fetch("http://localhost:3000/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        navigate("/profile");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Enter password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type={"submit"} value="login"></input>
      </form>
    </div>
  );
}

export default Login;
