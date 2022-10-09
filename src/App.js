import React from "react";
import "./App.css";
import Icon from "./images/icons8-sun-200.png";
import Form from "./Form";
import CityName from "./CityName";
import Description from "./Description";
import Temperature from "./Temperature";
import Date from "./Date";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Form />
          <CityName />
          <Description />
        </div>
        <div className="col">
          <Temperature />
          <Date />
        </div>
        <div className="col">
          <img src={Icon} alt="sun" className="icon-today" />
        </div>
      </div>
      <small>
        <span class="target">
          <a
            href="https://github.com/VickyBondarenko/weather-app-week4"
            target="_blank"
          >
            Open-source code
          </a>
          , by Vicky Bondarenko
        </span>
      </small>
    </div>
  );
}
