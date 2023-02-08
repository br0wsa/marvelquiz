import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FirebaseContext } from "../Firebase";

const Logout = () => {
  const firebase = useContext(FirebaseContext);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checked) {
      setTimeout(() => {
        console.log("déconnexion");
        navigate("/");
        firebase.signoutUser();
      }, 1000);
    }
  }, [checked, firebase, navigate]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Logout;
