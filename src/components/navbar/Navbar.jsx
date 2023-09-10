import React from "react";
import "./Navbar.css";
import twiter from "../assets/icon/twiter.png"
import facebook from "../assets/icon/facebook.png"
import instagram from "../assets/icon/instagram.png"
import google from "../assets/icon/google.png"

function Navbar(props) {
  function mail (){

  }
  return (
    <>
      <div className="nav-container"></div>
      <div className="navbar">
        <div className="nav-logo" style={{ fontSize: "3em", marginLeft: "5%"}}>
          M
        </div>
        <div className="nav-menu">
          <img src={twiter} alt="dd" />
          <img src={instagram} alt="ed" />
          <img src={google} alt="ewd" />
          <img src={facebook} alt="wed" />
          <button className="mail">Написать мне</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
