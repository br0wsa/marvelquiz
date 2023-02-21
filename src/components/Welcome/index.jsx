import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout";
import Quiz from "../Quiz";

import { FirebaseContext } from "../Firebase";

const Welcome = () => {
  const firebase = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : navigate("/");
    });

    if (!!userSession) {
      firebase
        .user(userSession.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      listener();
    };
  }, [userSession]);

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
        <Quiz userData={userData} />
      </div>
    </div>
  );
};

export default Welcome;
