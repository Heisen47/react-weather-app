import React, { useState } from "react";
import { Weather } from "./Weather";
import { Github } from 'lucide-react';

export const Navbar = (props) => {
    const setProgress = props.setProgress;
  const [unit, setUnit] = useState("metric");

  const handleToggle = () => {
    setUnit(() => (unit === "metric" ? "imperial" : "metric"));
  };

  return (
    <div>
      <nav className="navbar bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Your Weather App
          </a>
          <div className="form-check form-switch d-flex align-center justify-center m-3" id="switch-btn">
            <div className="inputbtn">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handleToggle}
              />
            </div>
            <div className="btn-label">
              <label
                className="form-check-label m-"
                htmlFor="flexSwitchCheckDefault"
              >
                {unit.charAt(0).toUpperCase()+unit.slice(1)}
              </label>

              <span className="github m-3">
                Made with ❤️ by Heisen
                <a className='m-3' href="https://github.com/Heisen47/react-weather-app" rel="noreferrer" target="_blank">
                <Github />
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="Weather-details">
        <Weather unit={unit} setProgress={setProgress}/>
      </div>
    </div>
  );
};
