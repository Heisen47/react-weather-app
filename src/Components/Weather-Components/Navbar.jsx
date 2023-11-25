import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Your Weather App
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Celsius
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};
