import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  const navigate = useNavigate();

  console.log(user);
  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <p>{user.bio}</p>

      <button
        onClick={() => {
          localStorage.removeItem("jwt");
          navigate("/redirect");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
