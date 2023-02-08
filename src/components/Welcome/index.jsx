import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout";
import Quiz from "../Quiz";

import { FirebaseContext } from "../Firebase";

const Welcome = () => {
  const firebase = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : navigate("/");
    });

    return () => {
      listener();
    };
  }, []);

  return userSession === null ? (
    <>
      <div className="loader">
        <p></p>
      </div>
    </>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz />
      </div>
    </div>
  );
};

export default Welcome;
