import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const refWolverine = useRef(null);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");

    setTimeout(() => {
      setBtn(true);
      refWolverine.current.classList.remove("startingImg");
    }, 500);
  }, []);

  const setLeftImage = () => {
    refWolverine.current.classList.add("leftImg");
  };

  const setRightImage = () => {
    refWolverine.current.classList.add("rightImg");
  };

  const clearImage = () => {
    if (refWolverine.current.classList.contains("leftImg")) {
      refWolverine.current.classList.remove("leftImg");
    } else if (refWolverine.current.classList.contains("rightImg")) {
      refWolverine.current.classList.remove("rightImg");
    }
  };

  const displayBtn = btn && (
    <>
      <div
        onMouseOver={setLeftImage}
        onMouseOut={clearImage}
        className="leftBox"
      >
        <Link className="btn-welcome" to="signup">
          Inscription
        </Link>
      </div>
      <div
        onMouseOver={setRightImage}
        onMouseOut={clearImage}
        className="rightBox"
      >
        <Link className="btn-welcome" to="login">
          Connection
        </Link>
      </div>
    </>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
