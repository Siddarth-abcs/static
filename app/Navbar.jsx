import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ style }) => {
  return (
    <nav className="navbar navbar-expand-lg px-1 px-lg-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/HobbyCue Logo.svg" className="logo" alt="HobbyCue Logo" />
        </a>

        {/* Icons for mobile */}
        <div className="d-flex d-lg-none gap-4">
          <img
            src="/notifications_black_24dp 1.svg"
            className="img-fluid"
            alt="Notifications Icon"
          />
          <img
            src="/Vector (5).svg"
            className="img-fluid"
            height="24"
            alt="Notifications Icon"
          />
          {/* Toggler/collapsing button */}
          <button
            className="navbar-toggler outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center flex-grow-1">
            {/* Search */}
            <form className="d-flex flex-grow-1 mx-3 my-2 my-lg-0">
              <div className="input-group" style={{ height: "44px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  style={{ height: "100%" }}
                />
                <span
                  className="input-group-text bg-info"
                  id="basic-addon1"
                  style={{ height: "100%" }}
                >
                  <img
                    src="/icons8_search 1.svg"
                    className="img-fluid"
                    height="40"
                    alt="Search Icon"
                  />
                </span>
              </div>
            </form>

            {/* Dropdowns */}
            <div className="d-flex flex-column flex-lg-row align-items-lg-center mx-2">
              <div className="dropdown mx-2 my-2 my-lg-0">
                <button
                  className="btn dropdown-toggle fw-bold fs-5 d-flex align-items-center"
                  type="button"
                  id="exploreDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="mx-2"
                    src="/Group.svg"
                    height="20"
                    alt="Explore Icon"
                  />
                  Explore
                </button>
                <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown mx-2 my-2 my-lg-0">
                <button
                  className="btn dropdown-toggle fw-bold fs-5 d-flex align-items-center"
                  type="button"
                  id="hobbiesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="mx-2 img-fluid"
                    src="/Polygon 3.svg"
                    height="20"
                    alt="Hobbies Icon"
                  />
                  Hobbies
                </button>
                <ul className="dropdown-menu" aria-labelledby="hobbiesDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Icons and Sign In */}
            <div className="d-flex align-items-center my-2 my-lg-0">
              <img
                src="/bookmark_black_24dp 1 (1).svg"
                className="img-fluid mx-2"
                height="32"
                alt="Bookmark Icon"
              />
              <img
                src="/notifications_black_24dp 1.svg"
                className="img-fluid mx-2"
                height="32"
                alt="Notifications Icon"
              />
              <img
                src="/Product 3.svg"
                className="img-fluid mx-2"
                height="32"
                alt="Product Icon"
              />
              <button
                type="button"
                className="btn btn-outline-info fw-bold mx-2 signin"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
