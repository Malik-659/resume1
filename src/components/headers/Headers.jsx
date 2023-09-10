import React from "react";
import "./Headers.css";
import avatar from "../assets/img/photo_2023-08-01_23-39-32.jpg";
function Headers(props) {
  return (
    <>
      <div className="head-container">
        <div className="head-image">
          <div className="navName"></div>
          <div className="navName1">
            <h1>Вундиза Абдумалик Хасанович</h1>
            <h3> Информационная безопастность</h3>
            <h3>Front-end</h3>
          </div>
          <img
            className="navImage"
            src="https://kalix.club/uploads/posts/2023-03/1677803694_kalix-club-p-nochnoi-gorod-oboi-na-noutbuk-vkontakte-3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="head-info-cont"></div>
      <div className="head-info">
        <div className="shadow">
        <img style={{ width: "13vw", height: "30vh", borderRadius: 15, marginLeft: -20, marginTop: 20}} src={avatar} alt="" />
      </div>
      </div>
      <div className="info-container">
        <div className="head-work">
          <h2>Образование</h2>
          <p></p>
          <p></p>
          <p>3</p>
          <p>4</p>
        </div>
        <div className="head-skill">
          <h2>Знание языков программирования:</h2>
          <p>HTML & CSS</p>
          <div style={{ width: 550, height: 15, background: "grey" }}>
            <div
              className="lineProggres"
              style={{ width: "80%", height: 15 }}
            ></div>
          </div>
          <p>JavaScript</p>
          <div style={{ width: 550, height: 15, background: "grey" }}>
            <div
              className="lineProggres"
              style={{ width: "60%", height: 15 }}
            ></div>
          </div>
          <p>React</p>
          <div style={{ width: 550, height: 15, background: "grey" }}>
            <div
              className="lineProggres"
              style={{ width: "20%", height: 15 }}
            ></div>
          </div>
          <p>TypeScript</p>
          <div style={{ width: 550, height: 15, background: "grey" }}>
            <div
              className="lineProggres"
              style={{ width: "1%", height: 15 }}
            ></div>
          </div>
          <p>C#</p>
          <div style={{ width: 550, height: 15, background: "grey" }}>
            <div
              className="lineProggres"
              style={{ width: "1%", height: 15 }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headers;
