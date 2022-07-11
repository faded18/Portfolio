import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";



const Intro = () => {
  const textref = useRef();
  useEffect(() => {
   
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there! I am</h2>
          <h1>Ashwani kumar</h1>
          <h3>
            FrontEnd <span>Developer</span>
          </h3>
        </div>
        <a href="#port">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
