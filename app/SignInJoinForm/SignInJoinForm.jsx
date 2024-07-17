import React, { useState } from "react";

function SignInJoinForm({ style }) {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div style={{ margin: "40px" }}>
      <div>
        <h2>
          <u style={{ color: "#8064A2" }} className="me-4">
            Sign in
          </u>{" "}
          <span style={{ color: "#939CA3" }}>Join in</span>
        </h2>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary fw-bold d-flex justify-content-center align-items-center"
          style={{ color: "black", width: "400px", marginTop: "30px" }}
        >
          <img
            src="/Google.svg"
            alt=""
            style={{ maxWidth: "24px", marginRight: "10px" }} // Adjust width and margin as needed
          />
          Continue with Google
        </button>
        <button
          type="button"
          className="btn btn-outline-primary fw-bold d-flex justify-content-center align-items-center"
          style={{ color: "black", width: "400px", marginTop: "20px" }}
        >
          <img
            src="/Facebook.svg"
            alt=""
            style={{ maxWidth: "24px", marginRight: "10px" }} // Adjust width and margin as needed
          />
          Continue with Facebook
        </button>
      </div>
      <div>
        <img
          src="/Connect With Separator.svg"
          className="fw-bold"
          style={{ marginTop: "20px", marginBottom: "20px" }}
          alt=""
          srcset=""
        />
      </div>
      <div>
        <div class="mb-3">
          <input
            type="email"
            style={{ width: "410px" }}
            class="form-control"
            id="Email"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            type="Password"
            style={{ width: "410px" }}
            class="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-between "
        style={{ width: "410px" }}
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src="/lock_black_24dp 1.svg" alt="" srcset="" />
          <h>Forgot password?</h>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary fw-bold d-flex justify-content-center align-items-center"
          style={{ color: "black", width: "400px", marginTop: "20px" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SignInJoinForm;
