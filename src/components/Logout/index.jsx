import React, { useState, useEffect, useContext } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { FirebaseContext } from "../Firebase";

const Logout = () => {
  const firebase = useContext(FirebaseContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setTimeout(() => {
        firebase.signoutUser();
      }, 1000);
    }
  }, [checked, firebase]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span
          data-tooltip-id="my-tooltip"
          className="slider round"
          data-tooltip-content="Déconnexion"
        ></span>
      </label>
      <Tooltip id="my-tooltip" place="left" effect="solid" />
    </div>
  );
};

export default Logout;
