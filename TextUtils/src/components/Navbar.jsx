import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
export default function Navbar(props) {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}Home
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}About
              </li>
            </ul>

            {/* Color palette buttons */}
            {/* <div className="colorPalete" style={divStyle}> */}
              {/* <button type="button" className="btn btn-primary btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
              <button type="button" className="btn btn-success btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
              <button type="button" className="btn btn-warning btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
              <button type="button" className="btn btn-info btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
              <button type="button" className="btn btn-light btn-sm">
                <i className="fa-regular fa-circle"></i>
              </button>
            </div> */}

            <div className={`form-check form-switch ${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault" style={{ color: 'white' }}>
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
